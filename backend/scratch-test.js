const recentNotices = [
  {
    title: 'Upcoming Mid-Semester Exams',
    category: 'Exam',
    content: 'The End-semester examinations for all B.Tech and MCA courses will commence from May 7th. Please check the portal for your exact schedule. Admis cards will be strictly checked.',
    aiSummary: 'End-Term Exams starting May 7th for B.Tech/MCA.',
  }
];
const lowercaseMsg = 'exam';
let foundNotice = recentNotices.find(n => {
  const category = (n.category || '').toLowerCase();
  const title = (n.title || '').toLowerCase();
  return (category && lowercaseMsg.includes(category)) ||
         (title && (lowercaseMsg.includes(title) || title.includes(lowercaseMsg)));
});
let finalReply = '';
if (foundNotice && lowercaseMsg.length > 3) {
  finalReply = `Based on your question, here's what I found: ${foundNotice.title}. ${foundNotice.aiSummary || foundNotice.content.substring(0, 80)}... Let me know if you need more details!`;
}
console.log(finalReply);
