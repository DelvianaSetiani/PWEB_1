function filterAlumni() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const alumniProfiles = document.querySelectorAll(".alumni-profile");

  alumniProfiles.forEach((profile) => {
    const name = profile.getAttribute("data-name").toLowerCase();
    const major = profile.getAttribute("data-major").toLowerCase();

    if (name.includes(input) || major.includes(input)) {
      profile.style.display = "block";
    } else {
      profile.style.display = "none";
    }
  });
}
