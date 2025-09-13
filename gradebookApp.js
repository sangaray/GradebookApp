function getAverage(scores) {
  return scores.length === 0
    ? 0
    : scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function getGrade(score) {
  if (score >= 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F" ? true : false;
}

function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);

  return grade !== "F"
    ? `Class average: ${average}. Your grade: ${grade}. You passed the course.`
    : `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
