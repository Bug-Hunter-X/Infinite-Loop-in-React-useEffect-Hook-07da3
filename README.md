# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.

## The Bug
The `bug.js` file contains a component that uses `useEffect` to increment a state variable. The problem lies in the useEffect's dependency array: it includes the `count` state, creating an infinite loop. Each time the `count` state changes, the `useEffect` is triggered, causing `count` to change again, and so on.

## The Solution
The `bugSolution.js` file provides a corrected implementation. The dependency array is modified to only include a variable that doesn't change within the useEffect, preventing the infinite loop.