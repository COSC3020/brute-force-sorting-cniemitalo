# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### My Answer

The best case of this implementation would be if the inputted array was already sorted, as the program would only have to iterate through the number of elements to check that they're in order. That would make it a time complexity of $\Theta(n)$. 

The worst case of this implementation would require the program to search through every possible permutation of the array, n!, and checking that each of them is sorted, n. That would make it a time complexity of $\Theta(n*n!)$. 

Creating permutations based on randomness, without tracking which permutations have already been tried becuase that would require memory, could potentially never end. The best case would remain the same as generating permutations systematically, that the input is already sorted and the program only has to check, so $\Theta(n)$. The worst case would be that the program never finds the sorted solution, as there is no guarantee that you could randomly guess the sorted array. 

### Sources and Plagiarism

https://www.geeksforgeeks.org/print-all-possible-permutations-of-an-array-vector-without-duplicates-using-backtracking/

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
