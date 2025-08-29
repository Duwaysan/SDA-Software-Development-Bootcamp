# ![Computer Science - Basic Sorting Algorithms - Lesson](./assets/hero.png)

## Back to Basics

<a href="https://generalassembly.wistia.com/medias/azfqw7nt3f?wvideo=azfqw7nt3f"><img src="https://embed-ssl.wistia.com/deliveries/d51ba0a326f83a120e17ad9805aeead1407d2188.jpg?image_crop_resized=900x506&image_play_button=true&image_play_button_size=2x&image_play_button_color=222222e0" alt="Basic Sorts" width="450" height="253" /></a>

_Transcript_

Remember when you learned long division in middle school? Not to knock math teachers, but long division was a slow, painful way to get to an answer — even though, eventually, you did. Then in high school, your math teacher finally said it was OK to just use a calculator. You probably grabbed your calculator and never looked back. All that time you spent carrying numbers and finding the remainder? Sayonara!

And if you ever bugged your teachers to explain why you’d spent so many hours learning long division when you could have just used a calculator, they probably told you how important it was to learn the basics so you’d understand more complicated functions down the road.

The same logic applies when we learn sorting algorithms.

_end of transcript_

## Where We're Going

This lesson covers the “long division” of basic sorts: **bubble sorts** and **insertion sorts**.

Your math teachers would agree they’re like long division, because:

- They’re slow, inefficient, and almost never used
- They’ll equip you to be able to tackle more complex sorting algorithms

Bubble and insertion sorts are almost never used in programming. You’re much more likely to use quick or merge sorts in the programs and languages you work with — they’re kind of like the calculators of algorithms.

We learn these basic sorts, however, because they’re simple and intuitive. And by learning these algorithms, you’ll understand the more complicated sorts we’ll describe in a future lesson.

## Meet Bubble Sort

Bubble sorts put values in order by iterating through a data set and comparing neighboring numbers. When the sort encounters a smaller value before a greater value, it swaps the values. The sort continues through the data set, value by value, swapping them until the array is properly sorted.

Here’s the basic process of the bubble sort algorithm:

1. Start at the beginning of an array of items.
2. Compare the item you’re looking at to the next item in the list.
3. If this item is smaller than the next one, keep it in place. If it’s greater, swap them.
4. Move on to the next item.
5. Repeat Steps 1–4 until you can go through the whole list without making any swaps.

![Bubble Sort](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/bubble-sort.gif)

## How Bubble Sort works

<a href="https://generalassembly.wistia.com/medias/gt6ss5ood6?wvideo=gt6ss5ood6"><img src="https://embed-ssl.wistia.com/deliveries/217bfc6eda55bbb8efaedfdb9671da9c36d53aac.jpg?image_crop_resized=900x506&image_play_button=true&image_play_button_size=2x&image_play_button_color=222222e0" alt="Basic Sorts- Video 2" width="450" height="253" /></a>

_Transcript_

Let’s use a bubble sort to sort this array of playing cards from smallest to largest. We’ll start at the beginning.

10 is bigger than the Queen, so we’ll keep them. Then we’ll move on to the next one. The Queen is bigger than the 7, so we can swap them.

We’ll keep moving across the cards, swapping cards, so that the larger cards move to the right and the smaller ones to the left.

_end of transcript_

### Knowledge Check

Is bubble sort a stable or unstable sort?

<br>
<details>
<summary>
Click for answer
</summary>
<br>
Stable.

The cards remained sorted, even as we completed more iterations through the set. That means it’s a stable sort.

</details>
<br>

### Knowledge Check

What's the Big O **worse case space efficiency** for bubble sort?

1. `O(1)`
2. `O(N)`
3. `O(log(N))`

<br>
<details>
<summary>
Click for answer
</summary>
<br>
O(1)

We didn’t have to find a new space for any of our cards while we were sorting them. That makes the space efficiency O(1), because amount of space used doesn’t change as the inputs increase.

</details>
<br>

### Knowledge Check

What is the Big O **worst case time efficiency** for bubble sort?

1. `O(1)`
2. `O(N)`
3. `O(N^2)`
4. `O(Log(N))`

<br>
<details>
<summary>
Click for answer
</summary>
<br>
O(N^2).

Bubble sort has a quadratic runtime — the worst one! Think about how many iterations we had to make to sort just our array of eight cards. Even President Barack Obama knows how slow bubble sort is. Check this out in the next section.

</details>
<br>

## Obama on the Bubble Sort

[![Barack Obama - Computer Science Question](https://img.youtube.com/vi/k4RRi_ntQc8/0.jpg)](https://www.youtube.com/watch?v=k4RRi_ntQc8)


## Meet Insertion Sort

Next up is insertion sort. Basically, an insertion sort takes each item and inserts it into the right place in the array.

Like bubble sort, insertion sort isn’t terribly efficient — it ends up traversing over and over the array many times. However, it’s definitely faster than bubble sort and works more efficiently in a wider variety of circumstances. It’s mainly used in real life in conjunction with bucket sort, which we’ll learn about soon.

![Insertion Sort](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/insertion-sort.gif)

## Insertion Sort Visualized

<a href="https://generalassembly.wistia.com/medias/vld5x9t8tu?wvideo=vld5x9t8tu"><img src="https://embed-ssl.wistia.com/deliveries/d26f4b9c21d1fcb96867af89e376a3cc494930a7.jpg?image_crop_resized=900x506&image_play_button=true&image_play_button_size=2x&image_play_button_color=222222e0" alt="Basic Sorts-Video 3" width="450" height="253" /></a>

_Transcript_

One way to visualize insertion sort is to think of playing a game of cards.

Imagine you’re playing poker. As the dealer hands you your cards, you’re picking up them one by one and ordering them numerically as you go.

The first card you pick up is sorted by the fact that it’s the only card you have. Any subsequent cards you pick up can be ordered according to how they fit into your existing hand. Each time you pick up a new card, you can simply insert it into the proper location.

The next card is 2. It’s lower than your existing cards, so you can move it to the left. You’ll continue sorting cards this way as you pick them up.

_end of transcript_

### Knowledge Check

Is insertion sort a stable or unstable sort?

<br>
<details>
<summary>
Click for answer
</summary>
<br>
Stable

Like bubble sort, the cards in your hand remain sorted as you pick them up. That means it’s a stable sort.

</details>
<br>

### Knowledge Check

What’s the Big O **worst case space complexity** for insertion sort?

1. `O(1)`
2. `O(N)`
3. `O(Log(N))`

<details>
<summary>
Click for answer
</summary>
<br>
O(1)

The space you're using in an insertion sort remains constant, leading to the 0(1) complexity.

</details>
<br>

### Knowledge Check

What’s the Big O **worst case time efficiency** for insertion sort?

1. `O(1)`
2. `O(N)`
3. `O(N^2)`
4. `O(Log(N))`

<br>
<details>
<summary>
Click for answer
</summary>
<br>
O(N^2)

Insertion sort is a lot like bubble sort in terms of time efficiency: lousy. Even though insertion sort works a bit faster, we still talk about both in the same Big O classification.

</details>
<br>

## Let's Talk About Interviews

Despite bubble sorts being virtually unusable, interviewers love to ask about them. It’s the simplest sorting algorithm to explain and shows that you understand sorting conceptually. You might be asked to sketch out how bubble sort works or answer some basic questions about the algorithm, [like these ones here](https://hoven-in.appspot.com/Home/Data-Structures/Data-Structure-Interview-Questions/interview-questions-on-bubble-sort-01.html). Similarly, you might be asked to sketch or explain how insertion sort works. [Here’s a nice recap](https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5).

Luckily, the internet is full of fun visualizations on how sorting algorithms work! Check out a few:

- This one from the [University of San Francisco](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html).
- A similar visualization on YouTube: [bubble sort](https://www.youtube.com/watch?v=Cq7SMsQBEUw) and [insertion sort](https://www.youtube.com/watch?v=8oJS1BMKE64).
- Last but certainly not least: folk dancing for [bubble sort](https://www.youtube.com/watch?v=lyZQPjUT5B4&feature=youtu.be&t=53s) and [insertion sort](https://www.youtube.com/watch?v=ROalU379l3U).

![Brain](assets/originals/interviews.png)
