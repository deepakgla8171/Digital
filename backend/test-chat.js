async function testChat() {
  try {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'exam', studentType: 'General' })
    });
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
testChat();
