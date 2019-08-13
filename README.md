Zero sum subsequence
====================

In this task, your job is to write a program that can decide whether a sequence of numbers contains a continuous subsequence having a zero sum.

For example `2 8 -9 1` is a good sequence, because it contains the subsequence `8 -9 1`, whose sum is `8 - 9 + 1 = 0`. On the other hand, `2 1 3 4 -9 6 8 9 -100000 123132131` contains no such subsequence, so it is not a good sequence. Note, that even though the sequence contains numbers `3, -9 and 6` (whose sum is zero), the numbers are **not** next to each other.

Input

Input starts with a number of test cases _T_ (`0 ≤ _T_ ≤ 50`). Each test case begins with a line containing a single number _N_ (`0 ≤ _N_ ≤ 20`) — the length of the sequence of numbers to consider. On the following line, there are exactly N numbers separated by exactly one space in between (the order matters!). For each number _a_ the following holds: `-1,000,000,000 ≤ a ≤ 1,000,000,000`.

Note, that the input size is quite low. Therefore you don’t need to produce the most effective algorithm possible. Sure, it’s nice if you do so, but _far_ more important is that your code is correct and you deliver it on time.

Output

For each test case find out whether the sequence of numbers in that test case contains a continuous subsequence of numbers, whose sum equals to exactly zero. Output `yes` if it does, `no` otherwise.

Sample input

    3
    4
    2 8 -9 1
    10
    2 1 3 4 -9 6 8 9 -100000 123132131
    4
    -5 8 0 4

Sample output

    yes
    no
    yes

Explanation of the sample problem

*   First two samples were explained above.
    
*   In the 3rd test case there is `0`, which on it’s own forms a zero sum subsequence.
    

Example test file

For internal testing, you can download the example from above as a file:

*   [example input](https://drive.google.com/open?id=117hYJu2QGKT9odQ8q9bkagMuZRS47ZU2)
    
*   [example output](https://drive.google.com/open?id=1ziWwBxfdfPKIlmrRdR3rTAepelLTFLFe)
    

Challenge

It is possible to write a solution that is able to compute this [large input file](https://drive.google.com/open?id=1QqWt3WiEc9LdpFTk0HPUv233DuQrfWJM) in under 10 seconds (`T = 100`, `N ≤ 100,000`). Are you able to do it?
