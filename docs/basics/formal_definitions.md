# <span style="color: black;">**Formal Definitions**</span>


## **Definition of Category**:

A <span style="color: blue;">**Category**</span> \\(\mathcal{C}\\) consists of two classes; 

- The class of its **objects**: \\(obj(\mathcal{C})\\) and 

- The class of **morphisms** \\( mor_{{\mathcal{C}}}(\mathcal{C})\\).
  
  Each morphism \\(f\in mor_{{\mathcal{C}}}(\mathcal{C})\\)of the morphisms class has a source object \\(A\\) and a target object \\(B\\), and is denoted as \\(f\colon A \to B\\). 
  
We denote \\(mor_{{\mathcal{C}}}(A, B)\\) the class of all morphisms between the objects \\(A\\) and \\(B\\).

- There is a binary operation \\(\circ\\) on the class of Morphisms called **morphism compositions**:
  \\[ \circ \colon mor_{{\mathcal{C}}}(A, B) \times mor_{{\mathcal{C}}}(B, C) \to mor_{{\mathcal{C}}}(A, C).\\] 
  Which allows to combine any two morphisms \\(f\in mor_{{\mathcal{C}}}(A, B)\\) and \\(g\in mor_{{\mathcal{C}}}(B, C)\\) to  produce a new morphism \\(g\circ f\in mor_{{\mathcal{C}}}(A, C)\\).
  
    <div align=center>
    <img src="../../img/intro_to_category/commutative_diagram.png" width="300px" hight="100px">
    </div>

So that the following properties hold:

- **Associativity:** If there are are different ways of composing morphisms, the result should be the same.

    > For any \\(f\in mor_{{{\mathcal{C}}}}(A, B)\\), \\(g\in mor_{{{\mathcal{C}}}}(B, C)\\) and \\(h\in mor_{{{\mathcal{C}}}}(C, D)\\)
    \\[h\circ(g\circ f) = (h\circ g)\circ f.\\]

    <div style="text-align: center;">
    <img src="../../img/intro_to_category/Associativity.png" alt="Commutative Diagram" width="300" height="200">
    <div>

- **Identity:** For each object, there exists an identity morphism that acts as a neutral element (identity) for the composition of morphisms.

    > There exists `identity` morphisms for each object \\(1_{X}\in mor_{\mathcal{C}}(X, X),\, \forall X\in obj(\mathcal{C})\\) 
    such that for any \\(f\in mor_{\mathcal{C}}(A, B)\\) \\[1_{B}\circ f= f\circ 1_{A}.\\]

    <div style="text-align: center;">
    <img src="../../img/intro_to_category/identities.png" alt="Commutative Diagram" width="300" height="200" >
    <div>



## **Functors**

The categories themselves can by "higher level arrows" which are called <span style="color: red;">**Functors**</span>. Latter, are mappings between categories that preserve the inner relationships (morphisms and their composition) between the objects.

<div style="text-align: center;">
    <img src="../../img/intro_to_category/functor_diag.png" alt="Commutative Diagram"  width="300" height="200">
</div>

As such, Functors establish analogies between two categories, and they can be used to translate the concepts from one category to another.

## **Natural Transformations**

The <span style="color: red;">**Natural Transformation**</span> is a concept which allows to define connections between Functors.

Let \\(F, G\\) be two functors between the categories \\( \mathcal{C}_1 \\) and \\( \mathcal{C}_2 \\).
A natural transformation is a collection
\\[
  \eta:= \\{ 
    \eta_A \in
    mor\_{\_{\mathcal{C}_2}}(F(A), G(A))
    \colon A \in obj(\mathcal{C}_1) 
    \\},
\\]
such that

- \\(\eta_A\\) is a morphism from \\(F(A)\\) to \\(G(A)\\), for each \\(obj(\mathcal{C}_1)\\).
  
- The above morphism relate the way the two Functors transform objects such that for every morphism \\(f\colon A \mapsto B\\), \\(A, B\in obj(\mathcal{C}_1)\\), we have
\\[\eta_B\circ F(f) = G(f)\circ \eta_A.\\]

This is illustrated in the following diagram with the commutative diagram that should hold for each morphism \\(\eta_{X}, \eta_{Y}\\) associated to the objects \\(X, Y\\) in the categories.

<div style="text-align: center;"> <img src="../../img/intro_to_category/Natural_Transformation3.3.png" alt="Commutative Diagram"  width="350" height="250"> </div>