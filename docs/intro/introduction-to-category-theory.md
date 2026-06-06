# <span style="color: black;">**Informal Introduction**</span>

A central idea in mathematics is that **`objects in mathematics are defined by the relationships they have with other objects`** rather than by their intrinsic properties. This idea is the basis of category theory, which allows to unify constructions and draw analogies between different branches of mathematics. 

In essence, category theory allows to formalise the idea of associations between different mathematical structures and associations between associations.

>
> "A mathematician is a person who can find analogies between theorems; a better mathematician is one who can see analogies between proofs and the best mathematician can notice analogies between theories. One can imagine that the ultimate mathematician is one who can see **`analogies between analogies.`**"
> 
> **Stefan Banach**


<span style="color: darkblue;">**Category Theory**</span>  is a branch of mathematics which studies the abstraction of objects and their relations. The basic entities of category theory are <span style="color: magenta;">**Categories**</span> , which are collections of objects and connections/arrows between them.

## **Main Concepts**

The main concepts of the category theory are <span style="color: red;">**Morphisms**</span>, <span style="color: blue;">**Functors**</span>, and <span style="color: green;">**Natural Transformations**</span>.

### **Morphisms**

The arrows are called <span style="color: red;">**Morphisms**</span>, which are the functions that operate on the objects, they relate one object called the source to another called the target of the morphism.

- **Morphism** are connections between the objects and are displayed with arrows in the diagrams. 
- **Morphism** can be combined transitively to form new morphism.
- Each object is associated with an **Identity Morphism** (a circular arrow to itself) which does not change other morphism when combined with them.

  
    <div align=center>
    <img src="../../img/intro_to_category/arrows.png" width="400px" hight="200px">
    </div>


### **Functors**

The categories themselves can by *"higher level arrows"* which are called <span style="color: blue;">**Functors**</span>. Latter, are mappings between categories that preserve the inner relationships (morphisms and their composition) between the objects.

As such, **Functors** `establish analogies between two categories`, and they can be used to translate the concepts from one category to another.


### **Natural Transformations**

The <span style="color: red;">**Natural Transformation**</span> is a concept which allows to define *`connections between Functors`* in a sense
analogous to what are Morphisms for objects. A such they establish dualities between Functors and objects in the categories. 

Since the Functors are defined by the way they transform each objects, to define connections between them we need to define  a *`natural`* way to transform images of each object by the two Functors.

Thus, a **Natural Transformation** is achieved via a family of morphism associated with each objects in the categories. Each object in the source category corresponds to a morphism in the target category, which maps the image of the object under the first functor to its image under the second functor. These morphisms enable us to relate how each functor transforms objects and morphisms. A natural transformation is established when there is consistency between the transformations induced by these morphisms and the transformations applied by the functors to objects and morphisms.


### **Category Theory and Programming**

The parallel between the category theory and the programming is that оne can think of the objects as the data types and the arrows as the functions that connect the data types. The parallelism allows to use the category theory to reason about the programs and to develop programming concepts which can stay consistent exploiting the concepts of the category theory.

An analogy can be made between the category theory and the programming languages. The objects in the category theory are like the types in the programming languages, and the morphisms are like the functions that operate on the types. The category theory provides a way to reason about the types and functions in the programming languages.

Let's consider the example of morphism between objects of 'Int' and 'String' types. The morphism is a function that converts an integer to a string. The function is defined in the programming language as follows:


=== "Python"
    ```python
    def int_to_string(x: int) -> str:
        return str(x)

    def string_to_bool(x: str) -> bool:
        return bool(x)

    def int_to_bool(x: int) -> bool:
        return bool(x)
    ```

=== "Scala"
    ```scala
    def intToString(x: Int): String = x.toString
    
    def stringToBool(x: String): Boolean = x.toBoolean
    
    def intToBool(x: Int): Boolean = x.toBoolean
    ```

=== "Haskell"
    ```haskell
    intToString :: Int -> String
    intToString x = show x
    
    stringToBool :: String -> Bool
    stringToBool x = read x
    
    intToBool :: Int -> Bool
    intToBool x = x /= 0
    ```
