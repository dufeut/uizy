/**
 * Components Registry
 *
 * A type-safe component registry that allows registering and calling
 * nested component functions via dot-notation paths.
 *
 * @example
 * ```ts
 * const tree = {
 *   drawer: {
 *     left: { open: () => {}, close: () => {} },
 *     right: { open: () => {}, close: () => {} }
 *   }
 * };
 *
 * Components.add(tree);
 * Components.call("drawer.left.open", {});
 * ```
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** Base type for a nested component tree */
export type ComponentTree = Record<string, unknown>;

/** Any callable component function */
export type ComponentFunction = (...args: unknown[]) => unknown;

/**
 * Recursively extracts all valid dot-notation paths from a component tree.
 * Only paths that lead to functions are included.
 */
export type ExtractPaths<T, P extends string = ""> = T extends ComponentFunction
  ? P
  : T extends object
    ? {
        [K in keyof T & string]: ExtractPaths<
          T[K],
          P extends "" ? K : `${P}.${K}`
        >;
      }[keyof T & string]
    : never;

/**
 * Extracts the value type at a given dot-notation path.
 */
export type ExtractValueAtPath<
  T,
  P extends string,
> = P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? ExtractValueAtPath<T[K], R>
    : never
  : P extends keyof T
    ? T[P]
    : never;

/** Options for component calls */
export interface CallOptions {
  /** If true, returns undefined instead of throwing when component not found */
  silent?: boolean;
}

/* ------------------------------------------------------------------ */
/* Path Resolution                                                     */
/* ------------------------------------------------------------------ */

/**
 * Resolves a dot-notation path to a value in an object tree.
 * Uses caching for performance on repeated lookups.
 */
function resolvePath(root: ComponentTree, path: string): unknown {
  const segments = path.split(".");
  let current: unknown = root;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return undefined;
    }
    if (typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }

  return current;
}

/** Type for the component caller function */
type ComponentCaller = (
  path: string,
  args: unknown,
  options?: CallOptions
) => unknown;

/**
 * Creates a callable interface for a component tree.
 * Returns a function that resolves and calls component functions by path.
 */
function createComponentCaller(root: ComponentTree): ComponentCaller {
  // Cache resolved paths for performance
  const cache = new Map<string, unknown>();

  return function call(
    path: string,
    args: unknown,
    options: CallOptions = {}
  ): unknown {
    // Check cache first
    let method = cache.get(path);

    if (method === undefined && !cache.has(path)) {
      method = resolvePath(root, path);
      cache.set(path, method);
    }

    if (typeof method === "function") {
      return method(args);
    }

    if (options.silent) {
      return undefined;
    }

    throw new ComponentNotFoundError(path);
  };
}

/* ------------------------------------------------------------------ */
/* Errors                                                              */
/* ------------------------------------------------------------------ */

/** Error thrown when a component path cannot be resolved */
export class ComponentNotFoundError extends Error {
  readonly path: string;

  constructor(path: string) {
    super(`Component not found: "${path}"`);
    this.name = "ComponentNotFoundError";
    this.path = path;
  }
}

/* ------------------------------------------------------------------ */
/* Utilities                                                           */
/* ------------------------------------------------------------------ */

/**
 * Extracts all valid action paths from a component tree.
 * Useful for debugging or generating documentation.
 *
 * @example
 * ```ts
 * const paths = flattenPaths({ a: { b: () => {} } });
 * // Returns: ["a.b"]
 * ```
 */
export function flattenPaths<T extends ComponentTree>(
  obj: T
): ExtractPaths<T>[] {
  const result: string[] = [];

  function walk(current: unknown, prefix: string): void {
    if (current === null || current === undefined) return;

    if (typeof current === "function") {
      result.push(prefix);
      return;
    }

    if (typeof current === "object") {
      for (const key of Object.keys(current as object)) {
        const value = (current as Record<string, unknown>)[key];
        const path = prefix ? `${prefix}.${key}` : key;
        walk(value, path);
      }
    }
  }

  walk(obj, "");
  return result as ExtractPaths<T>[];
}

/**
 * Checks if a path exists and points to a callable function.
 */
export function hasComponent<T extends ComponentTree>(
  tree: T,
  path: string
): boolean {
  const segments = path.split(".");
  let current: unknown = tree;

  for (const segment of segments) {
    if (current === null || current === undefined) return false;
    if (typeof current !== "object") return false;
    current = (current as Record<string, unknown>)[segment];
  }

  return typeof current === "function";
}

/* ------------------------------------------------------------------ */
/* Components Registry Class                                           */
/* ------------------------------------------------------------------ */

/**
 * Global component registry with type-safe path resolution.
 *
 * Supports:
 * - Adding component trees dynamically
 * - Calling components by dot-notation path
 * - Type inference for paths and return values
 * - Lazy initialization
 *
 * @example
 * ```ts
 * // Register components
 * Components.add({
 *   modal: {
 *     open: (opts: { id: string }) => console.log("Opening", opts.id),
 *     close: () => console.log("Closing")
 *   }
 * });
 *
 * // Call with full type safety
 * Components.call("modal.open", { id: "settings" });
 * ```
 */
export default class Components {
  private static _root: ComponentTree = {};
  private static _caller: ReturnType<typeof createComponentCaller> | null =
    null;
  private static _initialized = false;

  /**
   * Registers components into the global registry.
   * Merges with existing components (shallow merge at top level).
   *
   * @param items - Component tree to register
   * @returns The Components class for chaining
   */
  static add<C extends ComponentTree>(items: C): typeof Components {
    Components._root = { ...Components._root, ...items };
    // Invalidate caller cache when tree changes
    Components._caller = null;
    Components._initialized = false;
    return Components;
  }

  /**
   * Calls a component function by its dot-notation path.
   * Auto-initializes the registry if needed.
   *
   * @param path - Dot-notation path to the component (e.g., "drawer.left.open")
   * @param args - Arguments to pass to the component function
   * @param options - Call options
   * @returns The component function's return value
   * @throws {ComponentNotFoundError} If the path doesn't resolve to a function
   */
  static call<T extends ComponentTree = ComponentTree>(
    path: ExtractPaths<T> | string,
    args?: unknown,
    options: CallOptions = {}
  ): unknown {
    if (!Components._initialized) {
      Components._build();
    }

    return Components._caller!(path as string, args, options);
  }

  /**
   * Checks if a component exists at the given path.
   *
   * @param path - Dot-notation path to check
   * @returns True if the path resolves to a function
   */
  static has(path: string): boolean {
    return hasComponent(Components._root, path);
  }

  /**
   * Returns all registered component paths.
   * Useful for debugging or introspection.
   *
   * @returns Array of all valid component paths
   */
  static paths(): string[] {
    return flattenPaths(Components._root);
  }

  /**
   * Clears all registered components.
   * Mainly useful for testing.
   */
  static clear(): void {
    Components._root = {};
    Components._caller = null;
    Components._initialized = false;
  }

  /**
   * Returns the current component tree.
   * For debugging purposes only.
   */
  static getTree(): Readonly<ComponentTree> {
    return Components._root;
  }

  /** Internal: builds the caller from the current tree */
  private static _build(): void {
    Components._caller = createComponentCaller(Components._root);
    Components._initialized = true;
  }
}

// Legacy export for backwards compatibility
export { flattenPaths as flattenActions };
