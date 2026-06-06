# Introduction to Algebra

We continue with a brief introduction to some fundamental algebraic structures.

## Monoid

A **Monoid** is a basic algebraic structure consisting of a set combined with a binary operation that is associative and has an identity element.

### Definition

A monoid is defined by the following properties:

- **Associativity**: For all \\(a, b, c\\) in \\(M\\),
  \\[
  (a \cdot b) \cdot c = a \cdot (b \cdot c)
  \\]
- **Identity Element**: There exists an element \\(e \in M\\) such that for every element \\(a \in M\\),
  \\[
  e \cdot a = a \cdot e = a
  \\]

### Example

A simple example of a monoid is the set of natural numbers \\(\mathbb{N}\\) including zero, with addition as the operation. Here, the identity element is \\(0\\).

=== "Haskell"
    ```haskell
    -- Haskell example of a monoid operation
    add :: Int -> Int -> Int
    add x y = x + y

    identity :: Int
    identity = 0
    ```

=== "Scala"
    ```scala
    // Scala example of a monoid operation
    def add(x: Int, y: Int): Int = x + y

    val identity: Int = 0
    ```

=== "Python"
    ```python
    # Python example of a monoid operation
    def add(a, b):
        return a + b

    identity = 0
    ```
<!-- 
=== "Lisp"
    ```lisp
    ;; Lisp example of a monoid operation
    (defun add (a b)
      (+ a b))

    (defvar identity 0)
    ```
     -->

### Category Theoretic Perspective

In category theory, a monoid can be seen as a category with a single object. The object's morphisms are the elements of the monoid, and the composition of morphisms corresponds to the monoid operation.

## Group

A **Group** is like a monoid but also requires each element to have an inverse.

### **Definition**

A group is defined by all the properties of a monoid with the addition of:

- **Inverse Element**: For every element \\(a \in G\\), there exists an element \\(b \in G\\) such that,
  \\[
  a \cdot b = b \cdot a = e
  \\]

### **Example**

An example of a group is the set of integers \\(\mathbb{Z}\\) with addition. Each integer \\(a\\) has an inverse \\(-a\\).

```python
# Python example of a group operation
def add(a, b):
    return a + b

def inverse(a):
    return -a

identity = 0
```

### Category Theoretic Perspective

A **Monoid** can be seen as a category with one object, while a **Group** can be seen as a category with one object where every morphism has an inverse (i.e. is an isomorphism).
### Illustrations


