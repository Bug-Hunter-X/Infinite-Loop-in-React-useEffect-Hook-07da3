```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for preventing infinite loop
    if (count !== 0) {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```