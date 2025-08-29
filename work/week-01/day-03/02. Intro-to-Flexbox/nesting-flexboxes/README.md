<h1>
  <span class="headline">Flexbox</span>
  <span class="subhead">Nesting Flexboxes</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to create grid-like dimensional layouts by nesting flex box containers inside of one another.

## Nesting flexboxes

To create more intricate designs, we can nest flexbox containers within other flexbox containers. Here's an example with changes to both the `flex-parent` and `flex-child` classes:

```css
.flex-parent {
  background-color: black;
  display: flex;
  height: 600px;
  justify-content: space-around;
  align-items: center;
}

.flex-child {
  font-size: 48px;
  height: 100px;
  width: 100px;
  display: flex;
}
```

Now, any element with the `flex-child` class becomes a flexbox itself.

Following our naming conventions, `flex-child` may not be the best name for this class now. However, it demonstrates that flex children can also be flex parents!

A couple of key points to note:

- This doesn't affect how the flex children inside the existing flex parent behave. They will still follow the existing rules for flex children. If needed, we can apply child-specific properties to the `flex-child` class. Just like in real life, someone can simultaneously be a parent of a child and a child of a parent.
- What are the child elements of the `flex-child` `<div>`s? Even though there aren't specific elements inside of them, text is considered an element itself. So, if we apply rules to these elements that impact their children, it will affect the text as well.

This means that with this change:

```css
.flex-child {
  font-size: 48px;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

The text (the numbers in our boxes) will be centered both horizontally and vertically within their boxes. Cool!
