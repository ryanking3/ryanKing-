export type Essay = {
  slug: string
  title: string
  content: string
}

export const essays: Essay[] = [
  {
    slug: "chaos-encryption",
    title: "Chaos Theory Based Image Encryption",
    content: `
Chaos theory provides elegant and unpredictable methods for secure image encryption.

## Introduction
The core idea is simple: chaotic maps are highly sensitive to initial conditions (the so-called butterfly effect). A small change in a key results in a completely different encryption result, which is exactly what we want for cryptography.

## Chaotic Logistic Map
One of the simplest chaotic maps is the logistic map:

$$
x_{n+1} = r \\cdot x_n (1 - x_n), \\quad 0 < x_n < 1, \\; 3.57 < r \\le 4
$$

Here:

- $r$ is the control parameter.  
- $x_0$ (the seed) is our initial secret.  
- The sequence $x_n$ behaves chaotically for most values of $r$ in the range above.

## Method
1. Generate a chaotic sequence using the logistic map with secret key $(r, x_0)$.  
2. Convert this sequence into a binary keystream.  
3. XOR the keystream with the image pixels.  

This ensures a small change in $r$ or $x_0$ leads to an entirely different encrypted image.

## Conclusion
Chaos theory based image encryption is not only theoretically interesting, but also practical. While it should not replace established ciphers like AES in critical infrastructure, it demonstrates how nonlinear dynamics can inspire new security primitives. And it was a fun topic to dive into.

`,
  },
  {
    slug: "limits-ai",
    title: "Exploring the Theoretical Limits of Computability in AI",
    content: `
## Ryan King

## The Theoretical Limits of Computability in AI: An introduction.

Artificial Intelligence has made incredible improvements in the past few decades, with
machines now able to perform tasks that were once thought to be only capable of humans.
Despite these advancements, there are limits to what can be computed by an algorithm, a
concept rooted in the field of theoretical computer science.
This paper will delve into the topic of “Exploring the Theoretical Limits of Computability in
AI”. We will journey through the foundational theories of computability, from the works of
pioneers like Alan Turing and Alonzo Church, and discuss their implications in the realm of
AI.

We will discuss profound questions related to the Church-Turing thesis, the halting problem,
and other undecidable problems, and how they shape the capabilities and limitations of AI
systems. This exploration will not only enhance our understanding of AI’s potential but also
shed light on their constraints.

Understanding the limits of computability in AI is crucial for several reasons. Firstly, it
provides a reality check on the expectations surrounding AI. While AI has achieved
remarkable feats, it is not all-powerful. There are problems that are provably unsolvable or
intractable by any algorithm, no matter how intelligent. Recognizing these boundaries helps
us to invest resources wisely.

Secondly, the limits of computability have direct implications for the
design and analysis of AI systems. For instance, understanding that
certain problems are NP-complete - a selection of problems with no
efficient solution is known - can guide AI experts to seek approximate
solutions, instead of infinitely attempting to find an exact solution.

Thirdly, these limits also inspire new research directions in AI. For example, the field of
quantum computing has emerged as a potential way to bypass some of these limits. While
still in the early stages, quantum computing could potentially solve certain problems more
efficiently than normal computers, opening new possibilities for AI.

Lastly, understanding these limits also has philosophical implications. It allows us to reflect
on the nature of intelligence, both artificial and human, and on the potential and role of AI
in society. It reminds us that intelligence is not just about solving problems, but also about
knowing what can’t be solved. This humbling realization sheds light on the unique aspects of
human intelligence - our creativity, our empathy, our capacity for learning and adaptation -
that AI is far from replicating.

The objectives of this paper are as follows. Firstly, we aim to provide an overview of the
theoretical limits of computability, drawing from the foundational works in the field of
theoretical computer science.

Secondly, we seek to clarify the implications of these limits on the capabilities of AI systems.
We will delve into specific problems that are undecidable and discuss how AI algorithms
navigate these challenges.


Thirdly, we aim to explore the strategies employed in AI to deal with these limits, such as the
use of heuristics, approximation algorithms, and probabilistic methods.

Lastly, we aim to think on the future of AI considering these limits, including potential
breakthroughs and challenges that lie ahead. Through this exploration, we hope to find a
deeper understanding of the relationship between AI and the theoretical limits of
computability.

## The Church-Turing thesis.

Computability theory, also known as recursion theory, originated in the early 20th century
with the pioneering works of several mathematicians. The roots of the theory can be traced
back to David Hilbert’s “Entscheidungsproblem” or “Decision Problem”, posed in 1928,
which explored whether there exists a general algorithm that can determine the truth of any
mathematical statement.

Three key figures emerged in response: Alonzo Church, Alan Turing, and Emil Post. Church
proposed the lambda calculus, a formal system that captures the notion of computation via
function application. Turing introduced the concept of a ‘universal machine’ or Turing
machine, a theoretical device that can simulate any computer algorithm. Post developed a
formalism now known as Post systems, which are equivalent in power to Turing machines.

All three independently proved that certain problems are undecidable, i.e., no algorithm can
solve them. This includes the halting problem, which asks whether a given program will
eventually halt or continue forever. Their work laid the foundation for the Church-Turing
thesis, which says that any function that can be computed by an algorithm can be computed
by a Turing machine.

Building upon the historical context, one of the most pivotal concepts is that of the Turing
machine, introduced by Alan Turing in 1936. A Turing machine is a theoretical computational
model that encapsulates the fundamental logic of a computer algorithm. It’s a device
consisting of an infinite tape divided into
cells, a tape head that can read and write
symbols on the tape and move left or right,
and a set of states, one of which is
designated as the start state and some of
which are designated as accepting states.

The Turing machine operates according to a finite set of rules. Each rule dictates that if the
machine is in a certain state and reads a certain symbol, it should write a new symbol, move
the tape head left or right, and transition to a new state. The computation proceeds until it
reaches an accepting state or loops indefinitely.

The power of the Turing machine lies in its generality. Turing proved that there exists a
Universal Turing Machine that can simulate any other Turing machine. This means that given
the description of any Turing machine and its input, it can mimic that machine’s behaviour.


The Turing machine can express all algorithms that can be executed by a modern computer.
However, it also shows the inherent limitations of computation, as there exist problems that
no Turing machine can solve, such as the halting problem.

The Church-Turing thesis, named after Alonzo Church and Alan Turing, is a foundational
principle in the field of computer science. It’s not a theorem in the formal sense, but rather a
hypothesis about the nature of computation.

The Church-Turing thesis proposes that any function that can be computed by a human
following an algorithmic procedure, without any insight, can be computed by a Turing
machine.

This thesis has big implications for the field of AI. It implies that if a problem can be solved
by a human following a systematic procedure, then it can also be solved by an AI system. If a
problem cannot be solved by a Turing machine, then it cannot be solved by any algorithmic
process, including AI.

It’s important to note that the Church-Turing thesis is not a provable statement, but rather
an axiom that forms the basis of our understanding of computation. It has been remarkably
successful in predicting the limits of what can be computed, and no rebuttals have been
found.

## The halting problem.

The halting problem is a concept in computability theory that was introduced by Alan Turing
in 1936. It’s a decision problem that asks the following question: given a description of a
Turing machine and its input, can we determine whether the machine will eventually halt or
continue to run indefinitely?

The significance of the halting problem lies in its implications for the limits of what can be
computed. It shows that there are certain questions about the behaviour of computer
programs that are fundamentally unanswerable by any algorithm.

Turing proved that the halting problem is undecidable, meaning there is no general
algorithm that can solve this problem for all possible inputs. The proof is by contradiction
and uses a technique known as diagonalization. Turing imagined an algorithm that could
decide the halting problem and showed that such an algorithm leads to a logical
contradiction, thus proving that no such algorithm can exist. The proof is as follows:

Suppose we have a hypothetical Turing machine H that decides the halting problem. Given
any Turing machine T and input X, H halts and correctly tells us whether T halts on input X.

Now, construct a new Turing machine D that uses H as a subroutine. Given any Turing
machine T, D does the following: it runs H on T and T as inputs. If H says that T halts on input
T, then D goes into an infinite loop; otherwise, D halts.

Finally, what happens when we run D on itself as input. If D halts on input D, then it must go
into an infinite loop. But if D goes into an infinite loop on input D, then it must halt. This is a
contradiction, and the only resolution is that the Turing machine H cannot exist.

This proof shows that the halting problem is
undecidable: there is no general algorithm that can
determine, for all possible pairs of Turing machines
and inputs, whether the given Turing machine halts on
the given input.

At a fundamental level, the halting problem underscores the inherent limits of what can be
algorithmically determined. This means there are certain problems that AI cannot solve, not
due to a lack of computational resources or advanced algorithms, but because they are
fundamentally undecidable.

For AI developers, the halting problem serves as a reminder of the importance of handling
potential infinite loops or non-terminating processes within AI algorithms. It also highlights
the need for incorporating mechanisms to detect and manage such situations.

The halting problem also has implications for the field of automated program verification, an
area of AI that focuses on proving the correctness of computer programs. It implies that
there cannot exist a general algorithm that can verify the correctness of arbitrary programs.

Finally, the halting problem also impacts the realm of AI safety and ethics. If an AI system is
tasked with self-improvement, understanding the halting problem is crucial to prevent the
system from entering an infinite loop, which could have potentially harmful consequences.

In conclusion, the halting problem, while a theoretical concept, has practical implications
that are highly relevant to the development, operation, and safety of AI systems.

## Other examples of undecidability.

In addition to the halting problem, there are several other problems in computer science
that are known to be undecidable or intractable, and these too have implications for AI.

One such problem is the Entscheidungsproblem, which was posed by David Hilbert in 1928.
It asks for a general algorithm that can determine whether a statement in first-order logic is
universally valid. In 1936, Alonzo Church and Alan Turing independently proved that such an
algorithm cannot exist, implying that there is no algorithmic solution to this problem.

Another well-known undecidable problem is the Post correspondence problem, introduced
by Emil Post in 1946. This problem involves manipulating sequences of symbols according to
certain rules, and it has been proven to be undecidable.

The class of NP-complete problems is particularly
noteworthy. These are problems for which no efficient
solution is known, but a proposed solution can be
checked efficiently. Examples include the traveling
salesman problem and the Boolean satisfiability
problem. These problems are significant in AI because
many practical tasks, such as planning and scheduling,
can be formulated as NP-complete problems.


## The implications of undecidability for AI.

The existence of undecidable and intractable problems, have significant implications for AI
and machine learning.

Firstly, these limits highlight the inherent challenges in creating AI systems that can solve all
types of problems. Despite advancements in AI, there are problems that are provably
unsolvable or computationally infeasible for any algorithm. This underscores the importance
of problem selection in AI and the need to focus on problems that are computationally
tractable.

Secondly, these limits inform the design and implementation of machine learning
algorithms. Many machine learning tasks, such as training a neural network or finding an
optimal decision tree, are NP-complete problems. Understanding these computational limits
can guide the development of practical solutions, which can provide good solutions.

Thirdly, these limits also impact the interpretability of AI systems. Some machine learning
models, like deep neural networks, are often criticized as being “black boxes” due to their
complexity and the difficulty in understanding their internal workings. The existence of
undecidable problems suggests that there may be limits to our ability to fully understand
and explain the behaviour of complex AI systems.

In conclusion, the theoretical limits of computability are not merely abstract concepts, but
have practical implications that shape the development, capabilities, and understanding of
AI and machine learning systems.

## Dealing with computational limitations.

AI algorithms deal with the limits in a variety of ways. One approach is the use of
approximation algorithms for problems that are computationally hard. These algorithms
provide a solution that is close to the optimal solution. An example of this approach is the
use of heuristic methods like the nearest neighbour or 2-opt swap for the traveling salesman
problem.

Another strategy is the use of heuristics, which are rules of thumb that accelerate the
decision-making process. While heuristics do not guarantee an optimal solution, they often
lead to good solutions in a reasonable amount of time. Heuristics are widely used in AI,
particularly in search algorithms and game related AI.

Probabilistic methods are another way AI algorithms deal with uncertainty. These methods,
such as Bayesian inference or Markov Chain Monte Carlo, provide a principled way to handle
uncertainty and can deal with computationally hard problems.

Lastly, machine learning algorithms, which learn from data and make predictions or
decisions based on patterns they have learned, allow AI to deal with complex problems
without explicitly programming them.


AI algorithms encounter undecidable problems across various
domains and use strategies to handle them. For instance,
pathfinding, a common problem in robotics, involves finding
the shortest or most efficient path between two points. This
problem is NP-hard, making it computationally intractable for
large inputs. AI systems often use heuristic methods like A*
search or Dijkstra’s algorithm, which provide good solutions in
practical scenarios.

In the realm of game related AI, games like chess or Go present a challenge due to the
incredibly large number of possible game states, making a full search infeasible. AI systems,
such as DeepMind’s AlphaGo, use Monte Carlo Tree Search, a probabilistic method that
balances exploration of new moves with exploitation of known good moves, to handle this.

Automated theorem proving involves checking the validity of logical statements, a problem
known to be undecidable as per Gödel’s incompleteness theorems. AI systems in this
domain, like the Coq proof assistant, use a combination of heuristic search and user
guidance to find proofs.

In the logistics sector, the task of finding the shortest possible route that visits a set of cities
and returns to the origin city, known as the traveling salesman problem, is a classic NP-hard
problem. AI systems dealing with logistics and route optimization, like those used by UPS or
Amazon, use approximation algorithms and heuristics to find near-optimal solutions.

These examples illustrate how AI systems grapple with the limits of computability.

## Looking into the future of the field.

One area of focus is the development of more efficient algorithms and heuristics to tackle
intractable problems. For instance, advancements in optimization techniques and
probabilistic methods are enabling AI systems to find near-optimal solutions to problems
that are computationally hard, such as those in logistics, scheduling, or resource allocation.

Another promising direction is the exploration of quantum computing. Quantum computers
could potentially solve certain problems much faster than other computers, transcending
some of the limits posed by classical computability.

Quantum computers leverage the principles of quantum
mechanics to process information in ways that classical
computers cannot. They use quantum bits, or qubits, which
unlike classical bits that can be either 0 or 1, can exist in
multiple states at once thanks to a property known as
superposition. This allows quantum computers to perform
many calculations simultaneously.

Quantum computing enables the ability to handle larger datasets and more complex
models. Quantum versions of neural networks, known as quantum neural networks, are


being explored, with the potential to revolutionize fields like natural language processing
and computer vision.

Furthermore, the field of AI is also expanding its horizons beyond the realm of computation.
There is growing interest in incorporating insights from neuroscience, cognitive science, and
psychology into AI, with the aim of developing systems that can not only compute, but also
perceive, reason, learn, and adapt in ways that are closer to biological intelligence.

As AI continues to advance, it’s important to keep in mind the limits of computability. These
limits serve as a reminder of the challenges that lie ahead and the need for careful and
responsible development of AI technologies. They also show the importance of
transparency, interpretability, and robustness in AI systems, as well as the need for a
multidisciplinary approach to AI research that combines computation with insights from
other fields.

Advancements in explainable AI, which aims to make AI decisions transparent and
understandable to humans, could also significantly impact the field. As AI systems become
increasingly complex, the ability to interpret and explain their decisions becomes crucial for
trust and accountability.

These potential breakthroughs, along with others on the horizon, could redefine the
boundaries of AI, opening new possibilities and challenges.

## Conclusion.

In conclusion, this paper has delved into the intersection of AI and the theoretical limits of
computability. We began with an exploration of the historical and theoretical foundations of
computability, discussing concepts such as Turing machines and the Church-Turing thesis.
We then delved into the halting problem, providing an overview of its proof and
implications.

We also discussed other undecidable and intractable problems, highlighting their relevance
to AI and machine learning. We examined how AI algorithms navigate these challenges,
employing strategies such as approximation algorithms, heuristics, and probabilistic
methods. Case studies of AI systems grappling with these limits illustrated the practical
implications of these theoretical concepts.

Looking ahead, we discussed the future of AI considering these limits, touching upon
potential breakthroughs like quantum computing that could redefine the landscape of AI.
Despite the limits posed by computability, the field of AI continues to advance, pushing the
boundaries of what is computationally feasible.

Understanding the limits of computability is not only an academic exercise. It shapes the
development, capabilities, and understanding of AI systems. It informs the design of
algorithms, guides the management of computational resources, and influences the
interpretation and explanation of AI behaviour. As we continue to push the boundaries of AI,
this understanding will be crucial in guiding responsible and effective advancements in the
field.


### References.

Church-Turing thesis.
https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis

Dijkstra’s algorithm image.
https://www.101computing.net/dijkstras-shortest-path-algorithm

Halting problem.
https://www.allaboutai.com/ai-glossary/halting-problem

https://cs.stackexchange.com/questions/65401/proof-of-the-undecidability-of-the-halting-
problem

Halting problem image.
https://www.tutorialspoint.com/automata_theory/images/inverted_halting_machine.jpg

Limitations of computability.
https://theconversation.com/limits-to-computing-a-computer-scientist-explains-why-even-
in-the-age-of-ai-some-problems-are-just-too-difficult- 191930
https://en.wikipedia.org/wiki/Limits_of_computation

NP-Completeness.
https://www.geeksforgeeks.org/introduction-to-np-completeness/

NP-Complete image.
https://i.stack.imgur.com/IdYJk.png

Qubit image.
https://sahilsnotes.blogspot.com/2022/10/QuantumComputing.html

Travelling salesman image.
https://co-enzyme.fr/wp-content/uploads/2020/06/tsp.jpg

Turing machine image.
https://www.wikiwand.com/simple/Turing_machine

Undecidability.
https://www.geeksforgeeks.org/decidable-and-undecidable-problems-in-theory-of-
computation/

Quantum computing.
https://aimagazine.com/articles/quantum-computing-has-the-potential-to-transform-ai




    `,
  },
]
