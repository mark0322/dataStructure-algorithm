## 简述：
    图Graph 是一组由 边Edge 连接的 节点(或顶点Vertex) 构成的。任何二元关系都可以用图来表示。
    G = (V, E)   ->   Graph = (Vertex, Edge)

## 相关概念：
    相邻顶点：由一条边连接在一起的顶点，称为 相邻顶点。
    顶点的 度：一个 vertex 拥有相邻 vertex 的数量，称为 度。（即 度等于顶点拥有的边的数量）
    路径：顶点与顶点间能不间断连成线的 连续序列。 ->  v1,v2,v3,...vk
    简单路径：路径中不包含重复 vertex。
    环：路径收尾相连。（环也是 简单路径）
    无环的：若 graph 中不存在环，则称该 graph 为无环的。
    连通的：若 graph 中每两个 vertex 间都存在路径，则称该图是连通的。

    有向图 / 无向图：graph 的 edge 可以有方向的，称为 有向图。
    强连通：两个 vertex 间的 edge 是双向的，称为 强连通。

    加权：当 graph 的 edge 被赋予了 权值，则该 graph 表示加权了。

## 图的表示方式：
    邻接矩阵：用矩阵(array)表示图的关系。当 array[i][j] === 1时，表示 vertex - i 与 vertex - j 相连。
       A  B  C  D  E
    A[[0, 1, 1, 1, 0],
    B [1, 0, 0, 0, 0],
    C [1, 0, 0, 1, 0],
    D [1, 0, 1, 0, 1],
    E [0, 0, 0, 1, 0]]

    邻接表：{A: [B, C, D],
            B: [A],
            C: [A, D],
            D: [C, E],
            E: [D] }

    关联矩阵：矩阵的行表示 vertex，列表示 edge。 通常用于 edge 的数量多于 vertex 的情况下，以节省内存。