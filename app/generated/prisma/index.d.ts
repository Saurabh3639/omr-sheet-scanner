
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AnswerSheet
 * 
 */
export type AnswerSheet = $Result.DefaultSelection<Prisma.$AnswerSheetPayload>
/**
 * Model StudentSheet
 * 
 */
export type StudentSheet = $Result.DefaultSelection<Prisma.$StudentSheetPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answerSheet`: Exposes CRUD operations for the **AnswerSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerSheets
    * const answerSheets = await prisma.answerSheet.findMany()
    * ```
    */
  get answerSheet(): Prisma.AnswerSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSheet`: Exposes CRUD operations for the **StudentSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSheets
    * const studentSheets = await prisma.studentSheet.findMany()
    * ```
    */
  get studentSheet(): Prisma.StudentSheetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AnswerSheet: 'AnswerSheet',
    StudentSheet: 'StudentSheet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "answerSheet" | "studentSheet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AnswerSheet: {
        payload: Prisma.$AnswerSheetPayload<ExtArgs>
        fields: Prisma.AnswerSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          findFirst: {
            args: Prisma.AnswerSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          findMany: {
            args: Prisma.AnswerSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>[]
          }
          create: {
            args: Prisma.AnswerSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          createMany: {
            args: Prisma.AnswerSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>[]
          }
          delete: {
            args: Prisma.AnswerSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          update: {
            args: Prisma.AnswerSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          deleteMany: {
            args: Prisma.AnswerSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>[]
          }
          upsert: {
            args: Prisma.AnswerSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerSheetPayload>
          }
          aggregate: {
            args: Prisma.AnswerSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswerSheet>
          }
          groupBy: {
            args: Prisma.AnswerSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerSheetCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerSheetCountAggregateOutputType> | number
          }
        }
      }
      StudentSheet: {
        payload: Prisma.$StudentSheetPayload<ExtArgs>
        fields: Prisma.StudentSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          findFirst: {
            args: Prisma.StudentSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          findMany: {
            args: Prisma.StudentSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>[]
          }
          create: {
            args: Prisma.StudentSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          createMany: {
            args: Prisma.StudentSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>[]
          }
          delete: {
            args: Prisma.StudentSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          update: {
            args: Prisma.StudentSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          deleteMany: {
            args: Prisma.StudentSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>[]
          }
          upsert: {
            args: Prisma.StudentSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSheetPayload>
          }
          aggregate: {
            args: Prisma.StudentSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSheet>
          }
          groupBy: {
            args: Prisma.StudentSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSheetCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSheetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    answerSheet?: AnswerSheetOmit
    studentSheet?: StudentSheetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    answerSheets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerSheets?: boolean | UserCountOutputTypeCountAnswerSheetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswerSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerSheetWhereInput
  }


  /**
   * Count Type AnswerSheetCountOutputType
   */

  export type AnswerSheetCountOutputType = {
    studentSheets: number
  }

  export type AnswerSheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSheets?: boolean | AnswerSheetCountOutputTypeCountStudentSheetsArgs
  }

  // Custom InputTypes
  /**
   * AnswerSheetCountOutputType without action
   */
  export type AnswerSheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheetCountOutputType
     */
    select?: AnswerSheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerSheetCountOutputType without action
   */
  export type AnswerSheetCountOutputTypeCountStudentSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSheetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerSheets?: boolean | User$answerSheetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerSheets?: boolean | User$answerSheetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      answerSheets: Prisma.$AnswerSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answerSheets<T extends User$answerSheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$answerSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.answerSheets
   */
  export type User$answerSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    where?: AnswerSheetWhereInput
    orderBy?: AnswerSheetOrderByWithRelationInput | AnswerSheetOrderByWithRelationInput[]
    cursor?: AnswerSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerSheetScalarFieldEnum | AnswerSheetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AnswerSheet
   */

  export type AggregateAnswerSheet = {
    _count: AnswerSheetCountAggregateOutputType | null
    _avg: AnswerSheetAvgAggregateOutputType | null
    _sum: AnswerSheetSumAggregateOutputType | null
    _min: AnswerSheetMinAggregateOutputType | null
    _max: AnswerSheetMaxAggregateOutputType | null
  }

  export type AnswerSheetAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type AnswerSheetSumAggregateOutputType = {
    fileSize: number | null
  }

  export type AnswerSheetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    fileSize: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerSheetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    fileSize: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerSheetCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    fileSize: number
    status: number
    answers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerSheetAvgAggregateInputType = {
    fileSize?: true
  }

  export type AnswerSheetSumAggregateInputType = {
    fileSize?: true
  }

  export type AnswerSheetMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerSheetMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerSheetCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    status?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerSheet to aggregate.
     */
    where?: AnswerSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerSheets to fetch.
     */
    orderBy?: AnswerSheetOrderByWithRelationInput | AnswerSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerSheets
    **/
    _count?: true | AnswerSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerSheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerSheetMaxAggregateInputType
  }

  export type GetAnswerSheetAggregateType<T extends AnswerSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerSheet[P]>
      : GetScalarType<T[P], AggregateAnswerSheet[P]>
  }




  export type AnswerSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerSheetWhereInput
    orderBy?: AnswerSheetOrderByWithAggregationInput | AnswerSheetOrderByWithAggregationInput[]
    by: AnswerSheetScalarFieldEnum[] | AnswerSheetScalarFieldEnum
    having?: AnswerSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerSheetCountAggregateInputType | true
    _avg?: AnswerSheetAvgAggregateInputType
    _sum?: AnswerSheetSumAggregateInputType
    _min?: AnswerSheetMinAggregateInputType
    _max?: AnswerSheetMaxAggregateInputType
  }

  export type AnswerSheetGroupByOutputType = {
    id: string
    userId: string
    fileName: string
    fileSize: number
    status: string
    answers: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AnswerSheetCountAggregateOutputType | null
    _avg: AnswerSheetAvgAggregateOutputType | null
    _sum: AnswerSheetSumAggregateOutputType | null
    _min: AnswerSheetMinAggregateOutputType | null
    _max: AnswerSheetMaxAggregateOutputType | null
  }

  type GetAnswerSheetGroupByPayload<T extends AnswerSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerSheetGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerSheetGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentSheets?: boolean | AnswerSheet$studentSheetsArgs<ExtArgs>
    _count?: boolean | AnswerSheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerSheet"]>

  export type AnswerSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerSheet"]>

  export type AnswerSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerSheet"]>

  export type AnswerSheetSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fileName" | "fileSize" | "status" | "answers" | "createdAt" | "updatedAt", ExtArgs["result"]["answerSheet"]>
  export type AnswerSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studentSheets?: boolean | AnswerSheet$studentSheetsArgs<ExtArgs>
    _count?: boolean | AnswerSheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnswerSheet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studentSheets: Prisma.$StudentSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fileName: string
      fileSize: number
      status: string
      answers: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answerSheet"]>
    composites: {}
  }

  type AnswerSheetGetPayload<S extends boolean | null | undefined | AnswerSheetDefaultArgs> = $Result.GetResult<Prisma.$AnswerSheetPayload, S>

  type AnswerSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerSheetCountAggregateInputType | true
    }

  export interface AnswerSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnswerSheet'], meta: { name: 'AnswerSheet' } }
    /**
     * Find zero or one AnswerSheet that matches the filter.
     * @param {AnswerSheetFindUniqueArgs} args - Arguments to find a AnswerSheet
     * @example
     * // Get one AnswerSheet
     * const answerSheet = await prisma.answerSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerSheetFindUniqueArgs>(args: SelectSubset<T, AnswerSheetFindUniqueArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnswerSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerSheetFindUniqueOrThrowArgs} args - Arguments to find a AnswerSheet
     * @example
     * // Get one AnswerSheet
     * const answerSheet = await prisma.answerSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetFindFirstArgs} args - Arguments to find a AnswerSheet
     * @example
     * // Get one AnswerSheet
     * const answerSheet = await prisma.answerSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerSheetFindFirstArgs>(args?: SelectSubset<T, AnswerSheetFindFirstArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetFindFirstOrThrowArgs} args - Arguments to find a AnswerSheet
     * @example
     * // Get one AnswerSheet
     * const answerSheet = await prisma.answerSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnswerSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerSheets
     * const answerSheets = await prisma.answerSheet.findMany()
     * 
     * // Get first 10 AnswerSheets
     * const answerSheets = await prisma.answerSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerSheetWithIdOnly = await prisma.answerSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerSheetFindManyArgs>(args?: SelectSubset<T, AnswerSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnswerSheet.
     * @param {AnswerSheetCreateArgs} args - Arguments to create a AnswerSheet.
     * @example
     * // Create one AnswerSheet
     * const AnswerSheet = await prisma.answerSheet.create({
     *   data: {
     *     // ... data to create a AnswerSheet
     *   }
     * })
     * 
     */
    create<T extends AnswerSheetCreateArgs>(args: SelectSubset<T, AnswerSheetCreateArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnswerSheets.
     * @param {AnswerSheetCreateManyArgs} args - Arguments to create many AnswerSheets.
     * @example
     * // Create many AnswerSheets
     * const answerSheet = await prisma.answerSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerSheetCreateManyArgs>(args?: SelectSubset<T, AnswerSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnswerSheets and returns the data saved in the database.
     * @param {AnswerSheetCreateManyAndReturnArgs} args - Arguments to create many AnswerSheets.
     * @example
     * // Create many AnswerSheets
     * const answerSheet = await prisma.answerSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnswerSheets and only return the `id`
     * const answerSheetWithIdOnly = await prisma.answerSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnswerSheet.
     * @param {AnswerSheetDeleteArgs} args - Arguments to delete one AnswerSheet.
     * @example
     * // Delete one AnswerSheet
     * const AnswerSheet = await prisma.answerSheet.delete({
     *   where: {
     *     // ... filter to delete one AnswerSheet
     *   }
     * })
     * 
     */
    delete<T extends AnswerSheetDeleteArgs>(args: SelectSubset<T, AnswerSheetDeleteArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnswerSheet.
     * @param {AnswerSheetUpdateArgs} args - Arguments to update one AnswerSheet.
     * @example
     * // Update one AnswerSheet
     * const answerSheet = await prisma.answerSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerSheetUpdateArgs>(args: SelectSubset<T, AnswerSheetUpdateArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnswerSheets.
     * @param {AnswerSheetDeleteManyArgs} args - Arguments to filter AnswerSheets to delete.
     * @example
     * // Delete a few AnswerSheets
     * const { count } = await prisma.answerSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerSheetDeleteManyArgs>(args?: SelectSubset<T, AnswerSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerSheets
     * const answerSheet = await prisma.answerSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerSheetUpdateManyArgs>(args: SelectSubset<T, AnswerSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerSheets and returns the data updated in the database.
     * @param {AnswerSheetUpdateManyAndReturnArgs} args - Arguments to update many AnswerSheets.
     * @example
     * // Update many AnswerSheets
     * const answerSheet = await prisma.answerSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnswerSheets and only return the `id`
     * const answerSheetWithIdOnly = await prisma.answerSheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnswerSheet.
     * @param {AnswerSheetUpsertArgs} args - Arguments to update or create a AnswerSheet.
     * @example
     * // Update or create a AnswerSheet
     * const answerSheet = await prisma.answerSheet.upsert({
     *   create: {
     *     // ... data to create a AnswerSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerSheet we want to update
     *   }
     * })
     */
    upsert<T extends AnswerSheetUpsertArgs>(args: SelectSubset<T, AnswerSheetUpsertArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnswerSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetCountArgs} args - Arguments to filter AnswerSheets to count.
     * @example
     * // Count the number of AnswerSheets
     * const count = await prisma.answerSheet.count({
     *   where: {
     *     // ... the filter for the AnswerSheets we want to count
     *   }
     * })
    **/
    count<T extends AnswerSheetCountArgs>(
      args?: Subset<T, AnswerSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerSheetAggregateArgs>(args: Subset<T, AnswerSheetAggregateArgs>): Prisma.PrismaPromise<GetAnswerSheetAggregateType<T>>

    /**
     * Group by AnswerSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerSheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerSheetGroupByArgs['orderBy'] }
        : { orderBy?: AnswerSheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnswerSheet model
   */
  readonly fields: AnswerSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentSheets<T extends AnswerSheet$studentSheetsArgs<ExtArgs> = {}>(args?: Subset<T, AnswerSheet$studentSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnswerSheet model
   */
  interface AnswerSheetFieldRefs {
    readonly id: FieldRef<"AnswerSheet", 'String'>
    readonly userId: FieldRef<"AnswerSheet", 'String'>
    readonly fileName: FieldRef<"AnswerSheet", 'String'>
    readonly fileSize: FieldRef<"AnswerSheet", 'Int'>
    readonly status: FieldRef<"AnswerSheet", 'String'>
    readonly answers: FieldRef<"AnswerSheet", 'Json'>
    readonly createdAt: FieldRef<"AnswerSheet", 'DateTime'>
    readonly updatedAt: FieldRef<"AnswerSheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnswerSheet findUnique
   */
  export type AnswerSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter, which AnswerSheet to fetch.
     */
    where: AnswerSheetWhereUniqueInput
  }

  /**
   * AnswerSheet findUniqueOrThrow
   */
  export type AnswerSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter, which AnswerSheet to fetch.
     */
    where: AnswerSheetWhereUniqueInput
  }

  /**
   * AnswerSheet findFirst
   */
  export type AnswerSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter, which AnswerSheet to fetch.
     */
    where?: AnswerSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerSheets to fetch.
     */
    orderBy?: AnswerSheetOrderByWithRelationInput | AnswerSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerSheets.
     */
    cursor?: AnswerSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerSheets.
     */
    distinct?: AnswerSheetScalarFieldEnum | AnswerSheetScalarFieldEnum[]
  }

  /**
   * AnswerSheet findFirstOrThrow
   */
  export type AnswerSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter, which AnswerSheet to fetch.
     */
    where?: AnswerSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerSheets to fetch.
     */
    orderBy?: AnswerSheetOrderByWithRelationInput | AnswerSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerSheets.
     */
    cursor?: AnswerSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerSheets.
     */
    distinct?: AnswerSheetScalarFieldEnum | AnswerSheetScalarFieldEnum[]
  }

  /**
   * AnswerSheet findMany
   */
  export type AnswerSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter, which AnswerSheets to fetch.
     */
    where?: AnswerSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerSheets to fetch.
     */
    orderBy?: AnswerSheetOrderByWithRelationInput | AnswerSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerSheets.
     */
    cursor?: AnswerSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerSheets.
     */
    skip?: number
    distinct?: AnswerSheetScalarFieldEnum | AnswerSheetScalarFieldEnum[]
  }

  /**
   * AnswerSheet create
   */
  export type AnswerSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a AnswerSheet.
     */
    data: XOR<AnswerSheetCreateInput, AnswerSheetUncheckedCreateInput>
  }

  /**
   * AnswerSheet createMany
   */
  export type AnswerSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnswerSheets.
     */
    data: AnswerSheetCreateManyInput | AnswerSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnswerSheet createManyAndReturn
   */
  export type AnswerSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * The data used to create many AnswerSheets.
     */
    data: AnswerSheetCreateManyInput | AnswerSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerSheet update
   */
  export type AnswerSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a AnswerSheet.
     */
    data: XOR<AnswerSheetUpdateInput, AnswerSheetUncheckedUpdateInput>
    /**
     * Choose, which AnswerSheet to update.
     */
    where: AnswerSheetWhereUniqueInput
  }

  /**
   * AnswerSheet updateMany
   */
  export type AnswerSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnswerSheets.
     */
    data: XOR<AnswerSheetUpdateManyMutationInput, AnswerSheetUncheckedUpdateManyInput>
    /**
     * Filter which AnswerSheets to update
     */
    where?: AnswerSheetWhereInput
    /**
     * Limit how many AnswerSheets to update.
     */
    limit?: number
  }

  /**
   * AnswerSheet updateManyAndReturn
   */
  export type AnswerSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * The data used to update AnswerSheets.
     */
    data: XOR<AnswerSheetUpdateManyMutationInput, AnswerSheetUncheckedUpdateManyInput>
    /**
     * Filter which AnswerSheets to update
     */
    where?: AnswerSheetWhereInput
    /**
     * Limit how many AnswerSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerSheet upsert
   */
  export type AnswerSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the AnswerSheet to update in case it exists.
     */
    where: AnswerSheetWhereUniqueInput
    /**
     * In case the AnswerSheet found by the `where` argument doesn't exist, create a new AnswerSheet with this data.
     */
    create: XOR<AnswerSheetCreateInput, AnswerSheetUncheckedCreateInput>
    /**
     * In case the AnswerSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerSheetUpdateInput, AnswerSheetUncheckedUpdateInput>
  }

  /**
   * AnswerSheet delete
   */
  export type AnswerSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
    /**
     * Filter which AnswerSheet to delete.
     */
    where: AnswerSheetWhereUniqueInput
  }

  /**
   * AnswerSheet deleteMany
   */
  export type AnswerSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerSheets to delete
     */
    where?: AnswerSheetWhereInput
    /**
     * Limit how many AnswerSheets to delete.
     */
    limit?: number
  }

  /**
   * AnswerSheet.studentSheets
   */
  export type AnswerSheet$studentSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    where?: StudentSheetWhereInput
    orderBy?: StudentSheetOrderByWithRelationInput | StudentSheetOrderByWithRelationInput[]
    cursor?: StudentSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSheetScalarFieldEnum | StudentSheetScalarFieldEnum[]
  }

  /**
   * AnswerSheet without action
   */
  export type AnswerSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerSheet
     */
    select?: AnswerSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerSheet
     */
    omit?: AnswerSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerSheetInclude<ExtArgs> | null
  }


  /**
   * Model StudentSheet
   */

  export type AggregateStudentSheet = {
    _count: StudentSheetCountAggregateOutputType | null
    _avg: StudentSheetAvgAggregateOutputType | null
    _sum: StudentSheetSumAggregateOutputType | null
    _min: StudentSheetMinAggregateOutputType | null
    _max: StudentSheetMaxAggregateOutputType | null
  }

  export type StudentSheetAvgAggregateOutputType = {
    fileSize: number | null
    score: number | null
  }

  export type StudentSheetSumAggregateOutputType = {
    fileSize: number | null
    score: number | null
  }

  export type StudentSheetMinAggregateOutputType = {
    id: string | null
    answerSheetId: string | null
    fileName: string | null
    fileSize: number | null
    status: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSheetMaxAggregateOutputType = {
    id: string | null
    answerSheetId: string | null
    fileName: string | null
    fileSize: number | null
    status: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSheetCountAggregateOutputType = {
    id: number
    answerSheetId: number
    fileName: number
    fileSize: number
    status: number
    answers: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentSheetAvgAggregateInputType = {
    fileSize?: true
    score?: true
  }

  export type StudentSheetSumAggregateInputType = {
    fileSize?: true
    score?: true
  }

  export type StudentSheetMinAggregateInputType = {
    id?: true
    answerSheetId?: true
    fileName?: true
    fileSize?: true
    status?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSheetMaxAggregateInputType = {
    id?: true
    answerSheetId?: true
    fileName?: true
    fileSize?: true
    status?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSheetCountAggregateInputType = {
    id?: true
    answerSheetId?: true
    fileName?: true
    fileSize?: true
    status?: true
    answers?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSheet to aggregate.
     */
    where?: StudentSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSheets to fetch.
     */
    orderBy?: StudentSheetOrderByWithRelationInput | StudentSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSheets
    **/
    _count?: true | StudentSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSheetMaxAggregateInputType
  }

  export type GetStudentSheetAggregateType<T extends StudentSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSheet[P]>
      : GetScalarType<T[P], AggregateStudentSheet[P]>
  }




  export type StudentSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSheetWhereInput
    orderBy?: StudentSheetOrderByWithAggregationInput | StudentSheetOrderByWithAggregationInput[]
    by: StudentSheetScalarFieldEnum[] | StudentSheetScalarFieldEnum
    having?: StudentSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSheetCountAggregateInputType | true
    _avg?: StudentSheetAvgAggregateInputType
    _sum?: StudentSheetSumAggregateInputType
    _min?: StudentSheetMinAggregateInputType
    _max?: StudentSheetMaxAggregateInputType
  }

  export type StudentSheetGroupByOutputType = {
    id: string
    answerSheetId: string
    fileName: string
    fileSize: number
    status: string
    answers: JsonValue | null
    score: number | null
    createdAt: Date
    updatedAt: Date
    _count: StudentSheetCountAggregateOutputType | null
    _avg: StudentSheetAvgAggregateOutputType | null
    _sum: StudentSheetSumAggregateOutputType | null
    _min: StudentSheetMinAggregateOutputType | null
    _max: StudentSheetMaxAggregateOutputType | null
  }

  type GetStudentSheetGroupByPayload<T extends StudentSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSheetGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSheetGroupByOutputType[P]>
        }
      >
    >


  export type StudentSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerSheetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSheet"]>

  export type StudentSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerSheetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSheet"]>

  export type StudentSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerSheetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSheet"]>

  export type StudentSheetSelectScalar = {
    id?: boolean
    answerSheetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    status?: boolean
    answers?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answerSheetId" | "fileName" | "fileSize" | "status" | "answers" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["studentSheet"]>
  export type StudentSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }
  export type StudentSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }
  export type StudentSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerSheet?: boolean | AnswerSheetDefaultArgs<ExtArgs>
  }

  export type $StudentSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSheet"
    objects: {
      answerSheet: Prisma.$AnswerSheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      answerSheetId: string
      fileName: string
      fileSize: number
      status: string
      answers: Prisma.JsonValue | null
      score: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentSheet"]>
    composites: {}
  }

  type StudentSheetGetPayload<S extends boolean | null | undefined | StudentSheetDefaultArgs> = $Result.GetResult<Prisma.$StudentSheetPayload, S>

  type StudentSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSheetCountAggregateInputType | true
    }

  export interface StudentSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSheet'], meta: { name: 'StudentSheet' } }
    /**
     * Find zero or one StudentSheet that matches the filter.
     * @param {StudentSheetFindUniqueArgs} args - Arguments to find a StudentSheet
     * @example
     * // Get one StudentSheet
     * const studentSheet = await prisma.studentSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSheetFindUniqueArgs>(args: SelectSubset<T, StudentSheetFindUniqueArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSheetFindUniqueOrThrowArgs} args - Arguments to find a StudentSheet
     * @example
     * // Get one StudentSheet
     * const studentSheet = await prisma.studentSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetFindFirstArgs} args - Arguments to find a StudentSheet
     * @example
     * // Get one StudentSheet
     * const studentSheet = await prisma.studentSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSheetFindFirstArgs>(args?: SelectSubset<T, StudentSheetFindFirstArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetFindFirstOrThrowArgs} args - Arguments to find a StudentSheet
     * @example
     * // Get one StudentSheet
     * const studentSheet = await prisma.studentSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSheets
     * const studentSheets = await prisma.studentSheet.findMany()
     * 
     * // Get first 10 StudentSheets
     * const studentSheets = await prisma.studentSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSheetWithIdOnly = await prisma.studentSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSheetFindManyArgs>(args?: SelectSubset<T, StudentSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSheet.
     * @param {StudentSheetCreateArgs} args - Arguments to create a StudentSheet.
     * @example
     * // Create one StudentSheet
     * const StudentSheet = await prisma.studentSheet.create({
     *   data: {
     *     // ... data to create a StudentSheet
     *   }
     * })
     * 
     */
    create<T extends StudentSheetCreateArgs>(args: SelectSubset<T, StudentSheetCreateArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSheets.
     * @param {StudentSheetCreateManyArgs} args - Arguments to create many StudentSheets.
     * @example
     * // Create many StudentSheets
     * const studentSheet = await prisma.studentSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSheetCreateManyArgs>(args?: SelectSubset<T, StudentSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSheets and returns the data saved in the database.
     * @param {StudentSheetCreateManyAndReturnArgs} args - Arguments to create many StudentSheets.
     * @example
     * // Create many StudentSheets
     * const studentSheet = await prisma.studentSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSheets and only return the `id`
     * const studentSheetWithIdOnly = await prisma.studentSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSheet.
     * @param {StudentSheetDeleteArgs} args - Arguments to delete one StudentSheet.
     * @example
     * // Delete one StudentSheet
     * const StudentSheet = await prisma.studentSheet.delete({
     *   where: {
     *     // ... filter to delete one StudentSheet
     *   }
     * })
     * 
     */
    delete<T extends StudentSheetDeleteArgs>(args: SelectSubset<T, StudentSheetDeleteArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSheet.
     * @param {StudentSheetUpdateArgs} args - Arguments to update one StudentSheet.
     * @example
     * // Update one StudentSheet
     * const studentSheet = await prisma.studentSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSheetUpdateArgs>(args: SelectSubset<T, StudentSheetUpdateArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSheets.
     * @param {StudentSheetDeleteManyArgs} args - Arguments to filter StudentSheets to delete.
     * @example
     * // Delete a few StudentSheets
     * const { count } = await prisma.studentSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSheetDeleteManyArgs>(args?: SelectSubset<T, StudentSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSheets
     * const studentSheet = await prisma.studentSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSheetUpdateManyArgs>(args: SelectSubset<T, StudentSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSheets and returns the data updated in the database.
     * @param {StudentSheetUpdateManyAndReturnArgs} args - Arguments to update many StudentSheets.
     * @example
     * // Update many StudentSheets
     * const studentSheet = await prisma.studentSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSheets and only return the `id`
     * const studentSheetWithIdOnly = await prisma.studentSheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSheet.
     * @param {StudentSheetUpsertArgs} args - Arguments to update or create a StudentSheet.
     * @example
     * // Update or create a StudentSheet
     * const studentSheet = await prisma.studentSheet.upsert({
     *   create: {
     *     // ... data to create a StudentSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSheet we want to update
     *   }
     * })
     */
    upsert<T extends StudentSheetUpsertArgs>(args: SelectSubset<T, StudentSheetUpsertArgs<ExtArgs>>): Prisma__StudentSheetClient<$Result.GetResult<Prisma.$StudentSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetCountArgs} args - Arguments to filter StudentSheets to count.
     * @example
     * // Count the number of StudentSheets
     * const count = await prisma.studentSheet.count({
     *   where: {
     *     // ... the filter for the StudentSheets we want to count
     *   }
     * })
    **/
    count<T extends StudentSheetCountArgs>(
      args?: Subset<T, StudentSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentSheetAggregateArgs>(args: Subset<T, StudentSheetAggregateArgs>): Prisma.PrismaPromise<GetStudentSheetAggregateType<T>>

    /**
     * Group by StudentSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSheetGroupByArgs['orderBy'] }
        : { orderBy?: StudentSheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSheet model
   */
  readonly fields: StudentSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answerSheet<T extends AnswerSheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerSheetDefaultArgs<ExtArgs>>): Prisma__AnswerSheetClient<$Result.GetResult<Prisma.$AnswerSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentSheet model
   */
  interface StudentSheetFieldRefs {
    readonly id: FieldRef<"StudentSheet", 'String'>
    readonly answerSheetId: FieldRef<"StudentSheet", 'String'>
    readonly fileName: FieldRef<"StudentSheet", 'String'>
    readonly fileSize: FieldRef<"StudentSheet", 'Int'>
    readonly status: FieldRef<"StudentSheet", 'String'>
    readonly answers: FieldRef<"StudentSheet", 'Json'>
    readonly score: FieldRef<"StudentSheet", 'Int'>
    readonly createdAt: FieldRef<"StudentSheet", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentSheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentSheet findUnique
   */
  export type StudentSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter, which StudentSheet to fetch.
     */
    where: StudentSheetWhereUniqueInput
  }

  /**
   * StudentSheet findUniqueOrThrow
   */
  export type StudentSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter, which StudentSheet to fetch.
     */
    where: StudentSheetWhereUniqueInput
  }

  /**
   * StudentSheet findFirst
   */
  export type StudentSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter, which StudentSheet to fetch.
     */
    where?: StudentSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSheets to fetch.
     */
    orderBy?: StudentSheetOrderByWithRelationInput | StudentSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSheets.
     */
    cursor?: StudentSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSheets.
     */
    distinct?: StudentSheetScalarFieldEnum | StudentSheetScalarFieldEnum[]
  }

  /**
   * StudentSheet findFirstOrThrow
   */
  export type StudentSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter, which StudentSheet to fetch.
     */
    where?: StudentSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSheets to fetch.
     */
    orderBy?: StudentSheetOrderByWithRelationInput | StudentSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSheets.
     */
    cursor?: StudentSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSheets.
     */
    distinct?: StudentSheetScalarFieldEnum | StudentSheetScalarFieldEnum[]
  }

  /**
   * StudentSheet findMany
   */
  export type StudentSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter, which StudentSheets to fetch.
     */
    where?: StudentSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSheets to fetch.
     */
    orderBy?: StudentSheetOrderByWithRelationInput | StudentSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSheets.
     */
    cursor?: StudentSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSheets.
     */
    skip?: number
    distinct?: StudentSheetScalarFieldEnum | StudentSheetScalarFieldEnum[]
  }

  /**
   * StudentSheet create
   */
  export type StudentSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSheet.
     */
    data: XOR<StudentSheetCreateInput, StudentSheetUncheckedCreateInput>
  }

  /**
   * StudentSheet createMany
   */
  export type StudentSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSheets.
     */
    data: StudentSheetCreateManyInput | StudentSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSheet createManyAndReturn
   */
  export type StudentSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSheets.
     */
    data: StudentSheetCreateManyInput | StudentSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSheet update
   */
  export type StudentSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSheet.
     */
    data: XOR<StudentSheetUpdateInput, StudentSheetUncheckedUpdateInput>
    /**
     * Choose, which StudentSheet to update.
     */
    where: StudentSheetWhereUniqueInput
  }

  /**
   * StudentSheet updateMany
   */
  export type StudentSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSheets.
     */
    data: XOR<StudentSheetUpdateManyMutationInput, StudentSheetUncheckedUpdateManyInput>
    /**
     * Filter which StudentSheets to update
     */
    where?: StudentSheetWhereInput
    /**
     * Limit how many StudentSheets to update.
     */
    limit?: number
  }

  /**
   * StudentSheet updateManyAndReturn
   */
  export type StudentSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * The data used to update StudentSheets.
     */
    data: XOR<StudentSheetUpdateManyMutationInput, StudentSheetUncheckedUpdateManyInput>
    /**
     * Filter which StudentSheets to update
     */
    where?: StudentSheetWhereInput
    /**
     * Limit how many StudentSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSheet upsert
   */
  export type StudentSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSheet to update in case it exists.
     */
    where: StudentSheetWhereUniqueInput
    /**
     * In case the StudentSheet found by the `where` argument doesn't exist, create a new StudentSheet with this data.
     */
    create: XOR<StudentSheetCreateInput, StudentSheetUncheckedCreateInput>
    /**
     * In case the StudentSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSheetUpdateInput, StudentSheetUncheckedUpdateInput>
  }

  /**
   * StudentSheet delete
   */
  export type StudentSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
    /**
     * Filter which StudentSheet to delete.
     */
    where: StudentSheetWhereUniqueInput
  }

  /**
   * StudentSheet deleteMany
   */
  export type StudentSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSheets to delete
     */
    where?: StudentSheetWhereInput
    /**
     * Limit how many StudentSheets to delete.
     */
    limit?: number
  }

  /**
   * StudentSheet without action
   */
  export type StudentSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSheet
     */
    select?: StudentSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSheet
     */
    omit?: StudentSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSheetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnswerSheetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    fileSize: 'fileSize',
    status: 'status',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerSheetScalarFieldEnum = (typeof AnswerSheetScalarFieldEnum)[keyof typeof AnswerSheetScalarFieldEnum]


  export const StudentSheetScalarFieldEnum: {
    id: 'id',
    answerSheetId: 'answerSheetId',
    fileName: 'fileName',
    fileSize: 'fileSize',
    status: 'status',
    answers: 'answers',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentSheetScalarFieldEnum = (typeof StudentSheetScalarFieldEnum)[keyof typeof StudentSheetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    answerSheets?: AnswerSheetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerSheets?: AnswerSheetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    answerSheets?: AnswerSheetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnswerSheetWhereInput = {
    AND?: AnswerSheetWhereInput | AnswerSheetWhereInput[]
    OR?: AnswerSheetWhereInput[]
    NOT?: AnswerSheetWhereInput | AnswerSheetWhereInput[]
    id?: StringFilter<"AnswerSheet"> | string
    userId?: StringFilter<"AnswerSheet"> | string
    fileName?: StringFilter<"AnswerSheet"> | string
    fileSize?: IntFilter<"AnswerSheet"> | number
    status?: StringFilter<"AnswerSheet"> | string
    answers?: JsonNullableFilter<"AnswerSheet">
    createdAt?: DateTimeFilter<"AnswerSheet"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerSheet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentSheets?: StudentSheetListRelationFilter
  }

  export type AnswerSheetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studentSheets?: StudentSheetOrderByRelationAggregateInput
  }

  export type AnswerSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerSheetWhereInput | AnswerSheetWhereInput[]
    OR?: AnswerSheetWhereInput[]
    NOT?: AnswerSheetWhereInput | AnswerSheetWhereInput[]
    userId?: StringFilter<"AnswerSheet"> | string
    fileName?: StringFilter<"AnswerSheet"> | string
    fileSize?: IntFilter<"AnswerSheet"> | number
    status?: StringFilter<"AnswerSheet"> | string
    answers?: JsonNullableFilter<"AnswerSheet">
    createdAt?: DateTimeFilter<"AnswerSheet"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerSheet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studentSheets?: StudentSheetListRelationFilter
  }, "id">

  export type AnswerSheetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerSheetCountOrderByAggregateInput
    _avg?: AnswerSheetAvgOrderByAggregateInput
    _max?: AnswerSheetMaxOrderByAggregateInput
    _min?: AnswerSheetMinOrderByAggregateInput
    _sum?: AnswerSheetSumOrderByAggregateInput
  }

  export type AnswerSheetScalarWhereWithAggregatesInput = {
    AND?: AnswerSheetScalarWhereWithAggregatesInput | AnswerSheetScalarWhereWithAggregatesInput[]
    OR?: AnswerSheetScalarWhereWithAggregatesInput[]
    NOT?: AnswerSheetScalarWhereWithAggregatesInput | AnswerSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnswerSheet"> | string
    userId?: StringWithAggregatesFilter<"AnswerSheet"> | string
    fileName?: StringWithAggregatesFilter<"AnswerSheet"> | string
    fileSize?: IntWithAggregatesFilter<"AnswerSheet"> | number
    status?: StringWithAggregatesFilter<"AnswerSheet"> | string
    answers?: JsonNullableWithAggregatesFilter<"AnswerSheet">
    createdAt?: DateTimeWithAggregatesFilter<"AnswerSheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnswerSheet"> | Date | string
  }

  export type StudentSheetWhereInput = {
    AND?: StudentSheetWhereInput | StudentSheetWhereInput[]
    OR?: StudentSheetWhereInput[]
    NOT?: StudentSheetWhereInput | StudentSheetWhereInput[]
    id?: StringFilter<"StudentSheet"> | string
    answerSheetId?: StringFilter<"StudentSheet"> | string
    fileName?: StringFilter<"StudentSheet"> | string
    fileSize?: IntFilter<"StudentSheet"> | number
    status?: StringFilter<"StudentSheet"> | string
    answers?: JsonNullableFilter<"StudentSheet">
    score?: IntNullableFilter<"StudentSheet"> | number | null
    createdAt?: DateTimeFilter<"StudentSheet"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSheet"> | Date | string
    answerSheet?: XOR<AnswerSheetScalarRelationFilter, AnswerSheetWhereInput>
  }

  export type StudentSheetOrderByWithRelationInput = {
    id?: SortOrder
    answerSheetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerSheet?: AnswerSheetOrderByWithRelationInput
  }

  export type StudentSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentSheetWhereInput | StudentSheetWhereInput[]
    OR?: StudentSheetWhereInput[]
    NOT?: StudentSheetWhereInput | StudentSheetWhereInput[]
    answerSheetId?: StringFilter<"StudentSheet"> | string
    fileName?: StringFilter<"StudentSheet"> | string
    fileSize?: IntFilter<"StudentSheet"> | number
    status?: StringFilter<"StudentSheet"> | string
    answers?: JsonNullableFilter<"StudentSheet">
    score?: IntNullableFilter<"StudentSheet"> | number | null
    createdAt?: DateTimeFilter<"StudentSheet"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSheet"> | Date | string
    answerSheet?: XOR<AnswerSheetScalarRelationFilter, AnswerSheetWhereInput>
  }, "id">

  export type StudentSheetOrderByWithAggregationInput = {
    id?: SortOrder
    answerSheetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentSheetCountOrderByAggregateInput
    _avg?: StudentSheetAvgOrderByAggregateInput
    _max?: StudentSheetMaxOrderByAggregateInput
    _min?: StudentSheetMinOrderByAggregateInput
    _sum?: StudentSheetSumOrderByAggregateInput
  }

  export type StudentSheetScalarWhereWithAggregatesInput = {
    AND?: StudentSheetScalarWhereWithAggregatesInput | StudentSheetScalarWhereWithAggregatesInput[]
    OR?: StudentSheetScalarWhereWithAggregatesInput[]
    NOT?: StudentSheetScalarWhereWithAggregatesInput | StudentSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentSheet"> | string
    answerSheetId?: StringWithAggregatesFilter<"StudentSheet"> | string
    fileName?: StringWithAggregatesFilter<"StudentSheet"> | string
    fileSize?: IntWithAggregatesFilter<"StudentSheet"> | number
    status?: StringWithAggregatesFilter<"StudentSheet"> | string
    answers?: JsonNullableWithAggregatesFilter<"StudentSheet">
    score?: IntNullableWithAggregatesFilter<"StudentSheet"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentSheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentSheet"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerSheets?: AnswerSheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerSheets?: AnswerSheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerSheets?: AnswerSheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerSheets?: AnswerSheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerSheetCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerSheetsInput
    studentSheets?: StudentSheetCreateNestedManyWithoutAnswerSheetInput
  }

  export type AnswerSheetUncheckedCreateInput = {
    id?: string
    userId: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSheets?: StudentSheetUncheckedCreateNestedManyWithoutAnswerSheetInput
  }

  export type AnswerSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerSheetsNestedInput
    studentSheets?: StudentSheetUpdateManyWithoutAnswerSheetNestedInput
  }

  export type AnswerSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSheets?: StudentSheetUncheckedUpdateManyWithoutAnswerSheetNestedInput
  }

  export type AnswerSheetCreateManyInput = {
    id?: string
    userId: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerSheet: AnswerSheetCreateNestedOneWithoutStudentSheetsInput
  }

  export type StudentSheetUncheckedCreateInput = {
    id?: string
    answerSheetId: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerSheet?: AnswerSheetUpdateOneRequiredWithoutStudentSheetsNestedInput
  }

  export type StudentSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerSheetId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetCreateManyInput = {
    id?: string
    answerSheetId: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerSheetId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnswerSheetListRelationFilter = {
    every?: AnswerSheetWhereInput
    some?: AnswerSheetWhereInput
    none?: AnswerSheetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentSheetListRelationFilter = {
    every?: StudentSheetWhereInput
    some?: StudentSheetWhereInput
    none?: StudentSheetWhereInput
  }

  export type StudentSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerSheetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSheetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type AnswerSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSheetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSheetSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnswerSheetScalarRelationFilter = {
    is?: AnswerSheetWhereInput
    isNot?: AnswerSheetWhereInput
  }

  export type StudentSheetCountOrderByAggregateInput = {
    id?: SortOrder
    answerSheetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSheetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    score?: SortOrder
  }

  export type StudentSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    answerSheetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSheetMinOrderByAggregateInput = {
    id?: SortOrder
    answerSheetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    status?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSheetSumOrderByAggregateInput = {
    fileSize?: SortOrder
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnswerSheetCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput> | AnswerSheetCreateWithoutUserInput[] | AnswerSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutUserInput | AnswerSheetCreateOrConnectWithoutUserInput[]
    createMany?: AnswerSheetCreateManyUserInputEnvelope
    connect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
  }

  export type AnswerSheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput> | AnswerSheetCreateWithoutUserInput[] | AnswerSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutUserInput | AnswerSheetCreateOrConnectWithoutUserInput[]
    createMany?: AnswerSheetCreateManyUserInputEnvelope
    connect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnswerSheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput> | AnswerSheetCreateWithoutUserInput[] | AnswerSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutUserInput | AnswerSheetCreateOrConnectWithoutUserInput[]
    upsert?: AnswerSheetUpsertWithWhereUniqueWithoutUserInput | AnswerSheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerSheetCreateManyUserInputEnvelope
    set?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    disconnect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    delete?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    connect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    update?: AnswerSheetUpdateWithWhereUniqueWithoutUserInput | AnswerSheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerSheetUpdateManyWithWhereWithoutUserInput | AnswerSheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerSheetScalarWhereInput | AnswerSheetScalarWhereInput[]
  }

  export type AnswerSheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput> | AnswerSheetCreateWithoutUserInput[] | AnswerSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutUserInput | AnswerSheetCreateOrConnectWithoutUserInput[]
    upsert?: AnswerSheetUpsertWithWhereUniqueWithoutUserInput | AnswerSheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerSheetCreateManyUserInputEnvelope
    set?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    disconnect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    delete?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    connect?: AnswerSheetWhereUniqueInput | AnswerSheetWhereUniqueInput[]
    update?: AnswerSheetUpdateWithWhereUniqueWithoutUserInput | AnswerSheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerSheetUpdateManyWithWhereWithoutUserInput | AnswerSheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerSheetScalarWhereInput | AnswerSheetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswerSheetsInput = {
    create?: XOR<UserCreateWithoutAnswerSheetsInput, UserUncheckedCreateWithoutAnswerSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerSheetsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentSheetCreateNestedManyWithoutAnswerSheetInput = {
    create?: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput> | StudentSheetCreateWithoutAnswerSheetInput[] | StudentSheetUncheckedCreateWithoutAnswerSheetInput[]
    connectOrCreate?: StudentSheetCreateOrConnectWithoutAnswerSheetInput | StudentSheetCreateOrConnectWithoutAnswerSheetInput[]
    createMany?: StudentSheetCreateManyAnswerSheetInputEnvelope
    connect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
  }

  export type StudentSheetUncheckedCreateNestedManyWithoutAnswerSheetInput = {
    create?: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput> | StudentSheetCreateWithoutAnswerSheetInput[] | StudentSheetUncheckedCreateWithoutAnswerSheetInput[]
    connectOrCreate?: StudentSheetCreateOrConnectWithoutAnswerSheetInput | StudentSheetCreateOrConnectWithoutAnswerSheetInput[]
    createMany?: StudentSheetCreateManyAnswerSheetInputEnvelope
    connect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAnswerSheetsNestedInput = {
    create?: XOR<UserCreateWithoutAnswerSheetsInput, UserUncheckedCreateWithoutAnswerSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerSheetsInput
    upsert?: UserUpsertWithoutAnswerSheetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswerSheetsInput, UserUpdateWithoutAnswerSheetsInput>, UserUncheckedUpdateWithoutAnswerSheetsInput>
  }

  export type StudentSheetUpdateManyWithoutAnswerSheetNestedInput = {
    create?: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput> | StudentSheetCreateWithoutAnswerSheetInput[] | StudentSheetUncheckedCreateWithoutAnswerSheetInput[]
    connectOrCreate?: StudentSheetCreateOrConnectWithoutAnswerSheetInput | StudentSheetCreateOrConnectWithoutAnswerSheetInput[]
    upsert?: StudentSheetUpsertWithWhereUniqueWithoutAnswerSheetInput | StudentSheetUpsertWithWhereUniqueWithoutAnswerSheetInput[]
    createMany?: StudentSheetCreateManyAnswerSheetInputEnvelope
    set?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    disconnect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    delete?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    connect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    update?: StudentSheetUpdateWithWhereUniqueWithoutAnswerSheetInput | StudentSheetUpdateWithWhereUniqueWithoutAnswerSheetInput[]
    updateMany?: StudentSheetUpdateManyWithWhereWithoutAnswerSheetInput | StudentSheetUpdateManyWithWhereWithoutAnswerSheetInput[]
    deleteMany?: StudentSheetScalarWhereInput | StudentSheetScalarWhereInput[]
  }

  export type StudentSheetUncheckedUpdateManyWithoutAnswerSheetNestedInput = {
    create?: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput> | StudentSheetCreateWithoutAnswerSheetInput[] | StudentSheetUncheckedCreateWithoutAnswerSheetInput[]
    connectOrCreate?: StudentSheetCreateOrConnectWithoutAnswerSheetInput | StudentSheetCreateOrConnectWithoutAnswerSheetInput[]
    upsert?: StudentSheetUpsertWithWhereUniqueWithoutAnswerSheetInput | StudentSheetUpsertWithWhereUniqueWithoutAnswerSheetInput[]
    createMany?: StudentSheetCreateManyAnswerSheetInputEnvelope
    set?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    disconnect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    delete?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    connect?: StudentSheetWhereUniqueInput | StudentSheetWhereUniqueInput[]
    update?: StudentSheetUpdateWithWhereUniqueWithoutAnswerSheetInput | StudentSheetUpdateWithWhereUniqueWithoutAnswerSheetInput[]
    updateMany?: StudentSheetUpdateManyWithWhereWithoutAnswerSheetInput | StudentSheetUpdateManyWithWhereWithoutAnswerSheetInput[]
    deleteMany?: StudentSheetScalarWhereInput | StudentSheetScalarWhereInput[]
  }

  export type AnswerSheetCreateNestedOneWithoutStudentSheetsInput = {
    create?: XOR<AnswerSheetCreateWithoutStudentSheetsInput, AnswerSheetUncheckedCreateWithoutStudentSheetsInput>
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutStudentSheetsInput
    connect?: AnswerSheetWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerSheetUpdateOneRequiredWithoutStudentSheetsNestedInput = {
    create?: XOR<AnswerSheetCreateWithoutStudentSheetsInput, AnswerSheetUncheckedCreateWithoutStudentSheetsInput>
    connectOrCreate?: AnswerSheetCreateOrConnectWithoutStudentSheetsInput
    upsert?: AnswerSheetUpsertWithoutStudentSheetsInput
    connect?: AnswerSheetWhereUniqueInput
    update?: XOR<XOR<AnswerSheetUpdateToOneWithWhereWithoutStudentSheetsInput, AnswerSheetUpdateWithoutStudentSheetsInput>, AnswerSheetUncheckedUpdateWithoutStudentSheetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AnswerSheetCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSheets?: StudentSheetCreateNestedManyWithoutAnswerSheetInput
  }

  export type AnswerSheetUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSheets?: StudentSheetUncheckedCreateNestedManyWithoutAnswerSheetInput
  }

  export type AnswerSheetCreateOrConnectWithoutUserInput = {
    where: AnswerSheetWhereUniqueInput
    create: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput>
  }

  export type AnswerSheetCreateManyUserInputEnvelope = {
    data: AnswerSheetCreateManyUserInput | AnswerSheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnswerSheetUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerSheetWhereUniqueInput
    update: XOR<AnswerSheetUpdateWithoutUserInput, AnswerSheetUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerSheetCreateWithoutUserInput, AnswerSheetUncheckedCreateWithoutUserInput>
  }

  export type AnswerSheetUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerSheetWhereUniqueInput
    data: XOR<AnswerSheetUpdateWithoutUserInput, AnswerSheetUncheckedUpdateWithoutUserInput>
  }

  export type AnswerSheetUpdateManyWithWhereWithoutUserInput = {
    where: AnswerSheetScalarWhereInput
    data: XOR<AnswerSheetUpdateManyMutationInput, AnswerSheetUncheckedUpdateManyWithoutUserInput>
  }

  export type AnswerSheetScalarWhereInput = {
    AND?: AnswerSheetScalarWhereInput | AnswerSheetScalarWhereInput[]
    OR?: AnswerSheetScalarWhereInput[]
    NOT?: AnswerSheetScalarWhereInput | AnswerSheetScalarWhereInput[]
    id?: StringFilter<"AnswerSheet"> | string
    userId?: StringFilter<"AnswerSheet"> | string
    fileName?: StringFilter<"AnswerSheet"> | string
    fileSize?: IntFilter<"AnswerSheet"> | number
    status?: StringFilter<"AnswerSheet"> | string
    answers?: JsonNullableFilter<"AnswerSheet">
    createdAt?: DateTimeFilter<"AnswerSheet"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerSheet"> | Date | string
  }

  export type UserCreateWithoutAnswerSheetsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAnswerSheetsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAnswerSheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerSheetsInput, UserUncheckedCreateWithoutAnswerSheetsInput>
  }

  export type StudentSheetCreateWithoutAnswerSheetInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSheetUncheckedCreateWithoutAnswerSheetInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSheetCreateOrConnectWithoutAnswerSheetInput = {
    where: StudentSheetWhereUniqueInput
    create: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput>
  }

  export type StudentSheetCreateManyAnswerSheetInputEnvelope = {
    data: StudentSheetCreateManyAnswerSheetInput | StudentSheetCreateManyAnswerSheetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAnswerSheetsInput = {
    update: XOR<UserUpdateWithoutAnswerSheetsInput, UserUncheckedUpdateWithoutAnswerSheetsInput>
    create: XOR<UserCreateWithoutAnswerSheetsInput, UserUncheckedCreateWithoutAnswerSheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswerSheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswerSheetsInput, UserUncheckedUpdateWithoutAnswerSheetsInput>
  }

  export type UserUpdateWithoutAnswerSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAnswerSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetUpsertWithWhereUniqueWithoutAnswerSheetInput = {
    where: StudentSheetWhereUniqueInput
    update: XOR<StudentSheetUpdateWithoutAnswerSheetInput, StudentSheetUncheckedUpdateWithoutAnswerSheetInput>
    create: XOR<StudentSheetCreateWithoutAnswerSheetInput, StudentSheetUncheckedCreateWithoutAnswerSheetInput>
  }

  export type StudentSheetUpdateWithWhereUniqueWithoutAnswerSheetInput = {
    where: StudentSheetWhereUniqueInput
    data: XOR<StudentSheetUpdateWithoutAnswerSheetInput, StudentSheetUncheckedUpdateWithoutAnswerSheetInput>
  }

  export type StudentSheetUpdateManyWithWhereWithoutAnswerSheetInput = {
    where: StudentSheetScalarWhereInput
    data: XOR<StudentSheetUpdateManyMutationInput, StudentSheetUncheckedUpdateManyWithoutAnswerSheetInput>
  }

  export type StudentSheetScalarWhereInput = {
    AND?: StudentSheetScalarWhereInput | StudentSheetScalarWhereInput[]
    OR?: StudentSheetScalarWhereInput[]
    NOT?: StudentSheetScalarWhereInput | StudentSheetScalarWhereInput[]
    id?: StringFilter<"StudentSheet"> | string
    answerSheetId?: StringFilter<"StudentSheet"> | string
    fileName?: StringFilter<"StudentSheet"> | string
    fileSize?: IntFilter<"StudentSheet"> | number
    status?: StringFilter<"StudentSheet"> | string
    answers?: JsonNullableFilter<"StudentSheet">
    score?: IntNullableFilter<"StudentSheet"> | number | null
    createdAt?: DateTimeFilter<"StudentSheet"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSheet"> | Date | string
  }

  export type AnswerSheetCreateWithoutStudentSheetsInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerSheetsInput
  }

  export type AnswerSheetUncheckedCreateWithoutStudentSheetsInput = {
    id?: string
    userId: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerSheetCreateOrConnectWithoutStudentSheetsInput = {
    where: AnswerSheetWhereUniqueInput
    create: XOR<AnswerSheetCreateWithoutStudentSheetsInput, AnswerSheetUncheckedCreateWithoutStudentSheetsInput>
  }

  export type AnswerSheetUpsertWithoutStudentSheetsInput = {
    update: XOR<AnswerSheetUpdateWithoutStudentSheetsInput, AnswerSheetUncheckedUpdateWithoutStudentSheetsInput>
    create: XOR<AnswerSheetCreateWithoutStudentSheetsInput, AnswerSheetUncheckedCreateWithoutStudentSheetsInput>
    where?: AnswerSheetWhereInput
  }

  export type AnswerSheetUpdateToOneWithWhereWithoutStudentSheetsInput = {
    where?: AnswerSheetWhereInput
    data: XOR<AnswerSheetUpdateWithoutStudentSheetsInput, AnswerSheetUncheckedUpdateWithoutStudentSheetsInput>
  }

  export type AnswerSheetUpdateWithoutStudentSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerSheetsNestedInput
  }

  export type AnswerSheetUncheckedUpdateWithoutStudentSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerSheetCreateManyUserInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerSheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSheets?: StudentSheetUpdateManyWithoutAnswerSheetNestedInput
  }

  export type AnswerSheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSheets?: StudentSheetUncheckedUpdateManyWithoutAnswerSheetNestedInput
  }

  export type AnswerSheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetCreateManyAnswerSheetInput = {
    id?: string
    fileName: string
    fileSize: number
    status: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSheetUpdateWithoutAnswerSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetUncheckedUpdateWithoutAnswerSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSheetUncheckedUpdateManyWithoutAnswerSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}