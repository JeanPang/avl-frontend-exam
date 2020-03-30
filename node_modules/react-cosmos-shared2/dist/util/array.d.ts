export declare function updateItem<T>(items: Readonly<T[]>, item: T, update: Partial<T>): T[];
export declare function replaceOrAddItem<T>(items: Readonly<T[]>, matcher: (item: T) => boolean, item: T): T[];
export declare function removeItemMatch<T>(items: Readonly<T[]>, matcher: (item: T) => boolean): T[];
