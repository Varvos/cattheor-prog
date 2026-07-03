# Topological Data Analysis

## UMAP

> At a high level, UMAP  uses <span style="color: red;">*local manifold approximations*</span> and patches together their local <span style="color: red;">*fuzzy simplicial set representations*</span> to construct a <span style="color: red;">*topological representation*</span> of the high dimensional data. Given some low dimensional representation of the data, a similar process can be used to construct an equivalent topological representation. UMAP then optimizes the layout of the data representation in the low dimensional space, to minimize the crossentropy between the two topological representations.

The above explanation from the original UMAP paper contains several technical expressions which are not clear for a general reader. In the following we will try to follow the description of the algorithm in  more detail and use our so far collected knowledge on category theory and ML to enlighten their meanings.