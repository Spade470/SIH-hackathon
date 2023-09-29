const description = document.querySelector(".profile-description");
            const showMoreButton = document.createElement("button");
            showMoreButton.textContent = "Show Less";
            let isExpanded = true;

            showMoreButton.addEventListener("click", () => {
                if (isExpanded) {
                    description.style.display = "none";
                    showMoreButton.textContent = "Show More";
                } else {
                    description.style.display = "block";
                    showMoreButton.textContent = "Show Less";
                }
                isExpanded = !isExpanded;
            });

            // Append the "Show More" button to the profile
            document.querySelector(".profile").appendChild(showMoreButton);
            function myFunction(x) {
                x.classList.toggle("change");
              }
            