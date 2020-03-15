# [markdown语法](https://www.w3cschool.cn/markdownyfsm/markdownyfsm-odm6256r.html)

## 目录说明
- algorithm
- java
- nodejs
- python
- vue
- react

### 目录结构

```text
├── .nuxt
├── layouts
├── pages
├── store
├── assets
├── static
├── middleware
├── plugins
├── nuxt.config.js
```

## 片段

```javascript
console.log('abc')
```

```
片段
```
## 引用资源
![图片alt](img/1.gif '图片title')

## 表格
### 测试表格
| a | b |
| --- | --- |
| a | b |
| a | b |
### 测试表格2
|Name|Priority|Help needed|
|---|---|---|
|[Language Spec](https://github.com/LingDong-/wenyan-lang/issues/1)|  ***** |  |
|[Class](https://github.com/LingDong-/wenyan-lang/issues/31) / [Object literals](https://github.com/LingDong-/wenyan-lang/issues/20) |  *** | |
|[Import statements](https://github.com/LingDong-/wenyan-lang/issues/100) |  *** | |
|Standard library ([Math](https://github.com/LingDong-/wenyan-lang/issues/55)/[Bitwise ops](https://github.com/LingDong-/wenyan-lang/issues/2)/[Random](https://github.com/LingDong-/wenyan-lang/issues/87)) |  ***** | |
|[Test suite](https://github.com/LingDong-/wenyan-lang/issues/38)|  **** | √  |
|[Switch statements](https://github.com/LingDong-/wenyan-lang/issues/53)|  *** | |
|[Functional programming](https://github.com/LingDong-/wenyan-lang/issues/99) |  *** | |
|Stricter compiler |  **** | |
|Compiler for other languages |  ** | √ |
|[Plugins for editors](https://github.com/LingDong-/wenyan-lang/issues/77) |  ** | √ |
|Convert [js](https://github.com/LingDong-/wenyan-lang/issues/47)/[py](https://github.com/LingDong-/wenyan-lang/issues/67)/[anything](https://github.com/LingDong-/wenyan-lang/issues/73) back to wenyan |  * | √ |
|[Escaping](https://github.com/LingDong-/wenyan-lang/issues/84)/[generating](https://github.com/LingDong-/wenyan-lang/issues/128) special characters |  *** | |
|[Alternative syntax for 「「」」](https://github.com/LingDong-/wenyan-lang/issues/81)|  ** | |
|[Alternative symbols for 。](https://github.com/LingDong-/wenyan-lang/issues/93)|  ** | |
|Online IDE [fonts](https://github.com/LingDong-/wenyan-lang/issues/5) and [vertical text](https://github.com/LingDong-/wenyan-lang/issues/9) |  ** | |
|[Rendering comment as small inline text](https://github.com/LingDong-/wenyan-lang/issues/148) | ** | |
|More examples | ** | √ |

### 四、分割线
- 三个或者三个以上的 - 或者 * 都可以。
---
***

### 无序列表
- 无序列表用 - + * 任何一种都可以
- 注意：- + * 跟内容之间都要有一个空格

### 有序列表
1. 数字加点
2. 注意：序号跟内容之间要有空格

### 列表嵌套
- 一级列表
  - 二级列表
- 一级列表
  1. 二级列表

### 流程图
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&
```


### [数学公式](https://www.w3cschool.cn/markdownyfsm/markdownyfsm-odm6256r.html)
分数公式：$$ x=\frac{1}{2}$$
开方公式：$$ x=\frac{a}{\sqrt{b^2-4ac}}$$
开n次方公式:$$\sqrt[n]{3}$$
正负号合并公式：$$ x=\frac{a}{1\pm\sqrt{b^2-4ac}}$$

这里是行内公式 \\(E = mc^2\\) 这里是行内公式</br>
不等号公式(换行符号)：$$ a \ne 0$$ 
When \\( a \ne 0 \\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are: 
$$ a+b = b+a $$
多下标和上标：this is :\\(A_{ij} = 2^{i+j}\\)

角度（上面必须要空一行，换行）$$A = 90^\circ $$
求和 $$A=\sum_{i=0}^n A_i $$
积分 $$\int_0^2 f(t) {\rm d}x $$

累乘 $$\prod_{i=0}^n A_i $$

正下方下标(要和上式空一行？)
$$\max_n f(n) = \sum_{i=0}^n A_i $$
上下标 $$ A_i^k = B^k_i $$  
希腊字母 $$\varphi()$$
$$ y_k=\varphi(u_k+v_k)$$
无穷 \\(\infty\\)
$$J\alpha(x) = \sum{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha}$$
注意下面的写法：(右对齐)
$$ y_k=\varphi(u_k+v_k)$$

$$x^{y^z}=(1+{\rm e}^x)^{-2xy^w}$$
$$f(x)=x_2^3+1$$


如果要在左右两边都有上下标，可以用\sideset命令:
$$\sideset{^12}{^34}\bigotimes$$

()、[]和|表示自己，{}表示{}。当要显示大号的括号或分隔符时，要用\left和\right命令：
$$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$$
有时候要用\left.或\right.进行匹配而不显示本身：
$$\left. \frac{{\rm d}u}{{\rm d}x} \right| _{x=0}$$


微分方程:$$\frac{du}{dt} ,\frac{{\rm d}u}{{\rm d}x},\frac{d^2 u}{dx^2}$$
偏微分方程:$$\frac{\partial u}{\partial t}$$
$$= h^2 \left( \frac{\partial^2 u}{\partial x^2} 
+ \frac{\partial^2 u}{\partial y^2}  
+ \frac{\partial^2 u}{\partial z^2}\right)$$


####省略号：$$ f(x_1,x_2,\cdots,x_n)= x1^2 + x2^2 + \ldots + xn^2 $$
####向量:$$\vec{a} \cdot \vec{b}=0$$
####极限$$\lim_{n \rightarrow +\infty}$$
  $$\frac{1}{\lim_{u \rightarrow \infty}}$$

 $$\frac{1}{\lim\limits_{u \rightarrow \infty}}$$


###大括号右多行赋值
####方法一
$$P(x|Pa_x)=\begin{cases} 
			1, & x=f(Pa_{x})\\\\
			0, & other\ values 
		\end{cases}$$
####方法二
$$P(x|Pa_x)=\begin{cases}
	 	1,& x=f(Pa_{x})\\\\ 0,& other values 
	\end{cases}$$


$$\left(\begin{array}{ccccc}
		1 & 2 & 3 & 4 & 5\\ 
		3 & 4 & 5 & 6 & 7
	\end{array}\right)$$


$$\left(\begin{array}{ccccc}
		1 & 2 & 3 & 4 & 5\\\\ 
		3 & 4 & 5 & 6 & 7
	\end{array}\right)$$
####不带竖杠的矩阵
$$\begin{matrix}
   1 & 2 & 3 \\\\
   4 & 5 & 6 \\\\
   7 & 8 & 9
  \end{matrix}$$
####方括号形式
$$\begin{bmatrix}
   1 & 2 & 3 \\\\
   4 & 5 & 6 \\\\
   7 & 8 & 9
  \end{bmatrix}\tag{1}$$

$$
 \left[
 \begin{matrix}
   1 & 2 & 3 \\\\
   4 & 5 & 6 \\\\
   7 & 8 & 9
  \end{matrix}
  \right] \tag{1-1}
$$











> **版权声明**
>
> 转载时也必须遵循创意共享的惯例，注明文章的作者和出处（即本页面或文章页面）
>
> 谢谢合作！