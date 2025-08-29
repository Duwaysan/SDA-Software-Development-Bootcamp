# ![Computer Science - Intro to Sorting Algorithms - Exercise](./assets/hero.png)

# Activity: Sorting Cards

Before we get into any code, let's try sorting a deck of cards by hand.

Acquire a set of playing cards. You'll be sorting these cards using different methods to understand sorting algorithms better.

## Bubble Sort

1. **Shuffle and Prepare the Deck**: Lay 20 cards out in a line on a table.

2. **Sorting Process**:
   - Starting at the beginning of the line, compare the first two cards.
   - If the first card is greater than the second card, swap them.
   - Move to the next pair of cards (second and third) and repeat the comparison and swapping process.
   - Continue this process until you reach the end of the line.
   - Start over from the beginning of the line.
   - Repeat this process until you make a pass through your line of cards with zero swaps. Congratulations, you have a sorted deck of cards!

   Note: If you encounter a tie (e.g., a 5 of hearts and a 5 of diamonds), do not swap them. This maintains the stability of the sort.

Feel free to choose your card order. For example, numerical (as in poker), aces always low, reverse order, or using Pinochle ordering: `[9, J, Q, K, 10, A]`.


### Reflection Questions for Bubble Sort

After completing the Bubble Sort, reflect on the following questions:

1. How fast was this sort? Fast, slow, medium?
2. Did you require any extra space besides the space that the cards were originally laid out in?
3. What effect did it have on the end result that you did not swap "ties" (e.g., a 5 of hearts and a 5 of diamonds)?
4. How fast or slow would it be to sort cards that start out already in order?
5. How fast or slow would it be to sort cards that start out in completely reversed order?
6. Hypothetically, if you wanted to sort by suits (e.g., clubs < diamonds < hearts < spades) and then by card value, how would your swap/comparison logic change?
7. Given your answers to the previous questions, make a guess at what this sort's stats are:
    * Best-case time complexity (Big O)
    * Worst-case time complexity (Big O)
    * Space complexity? (Big O)
    * Is this a stable or unstable sort?

The sort you performed is called "Bubble Sort." If you observed carefully, you might have noticed that higher value cards "bubble" to the top of the list as you sort.

## Insertion Sort

1. **Shuffle and Prepare the Deck**: Shuffle your deck of cards thoroughly to ensure they are in random order. Lay the shuffled deck face down on the table.

2. **Start Sorting**:
   - Pick up the first card from the deck and place it face up on your table. This is your starting point, and it is considered sorted since it’s the only card.

3. **Insert Cards into Sorted Position**:
   - Pick up the next card from the top of the deck.
   - Compare this card with the cards that are already placed face up on the table, starting from the rightmost (last placed) card.
   - Move from right to left through the cards on the table, finding the correct position for the new card. Keep shifting the already placed cards to the right until you find where the new card fits.
   - Place the new card in the correct position.

4. **Repeat**:
   - Continue picking up one card at a time from the deck and insert it into the correct position among the already sorted cards on the table.
   - Repeat this process until all cards from the deck are picked up and placed in the correct sorted order.

5. **Finished**:
   - Once all the cards have been placed in the sorted position on the table, you have completed the insertion sort.

### Example Walkthrough

1. Start with a shuffled deck. Let’s say you have the following order: 7♠, 3♥, 9♣, 2♦, 5♠.

2. Place the first card (7♠) on the table. This is your sorted section: `[7♠]`.

3. Pick up the next card (3♥). Compare it with 7♠. Since 3♥ is less than 7♠, place 3♥ to the left of 7♠. Your sorted section is now: `[3♥, 7♠]`.

4. Pick up the next card (9♣). Compare it with 7♠. Since 9♣ is greater than 7♠, place 9♣ to the right of 7♠. Your sorted section is now: `[3♥, 7♠, 9♣]`.

5. Pick up the next card (2♦). Compare it with 9♣, 7♠, and 3♥. Since 2♦ is less than all of them, place it to the left of 3♥. Your sorted section is now:   `[2♦, 3♥, 7♠, 9♣]`.

6. Pick up the next card (5♠). Compare it with 9♣, 7♠, and 3♥. 5♠ is less than 7♠ and 9♣ but greater than 3♥. Place 5♠ between 3♥ and 7♠. Your sorted section is now: `[2♦, 3♥, 5♠, 7♠, 9♣]`.

7. Repeat until all cards are sorted.

### Reflection Questions for Insertion Sort

After completing the Insertion Sort, reflect on the following questions:

1. How fast was this sort? Fast, slow, medium?
2. Did you require any extra space besides the space that the cards were originally laid out in?
3. How fast or slow would it be to sort cards that start out already in order?
4. How fast or slow would it be to sort cards that start out in completely reversed order?
5. Given your answers to the previous questions, hazard a guess at what this sort's stats are:
    * Best-case time complexity (Big Ω)
    * Worst-case time complexity (Big O)
    * Space complexity? (Big O)
    * Is this a stable or unstable sort?

How did it go? Do you think you could write code to mimic these two sorts?