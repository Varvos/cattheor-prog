# Functors

This section explores various flavors of `Functors`, their role in mathematics, and their usage in programming.




=== "Scala"
    ```scala
    // Scala example of a functor
    trait Functor[F[_]] {
    def map[A, B](fa: F[A])(f: A => B): F[B]
    }
    ```

=== "Haskell"
    ```haskell
    -- Haskell example of a functor
    class Functor f where
    fmap :: (a -> b) -> f a -> f b
    ```
