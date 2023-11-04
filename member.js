function skillsMember() {
  var skills = document.getElementById('skills');
  var skillsMember = document.getElementById('skills-member');
  var skillsMemberClose = document.getElementById('skills-member-close');
  skills.addEventListener('click', function() {
    skillsMember.classList.add('skills-member-open');
  });
  skillsMemberClose.addEventListener('click', function() {
    skillsMember.classList.remove('skills-member-open');
  });
}