const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author || "Unknown";
    } catch (error) {
        quote.innerHTML = "An error occurred while fetching the quote.";
        author.innerHTML = "";
        console.error(error);
    }
}

getquote(api_url);

function tweet() {
    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            quote.innerHTML
        )}`,
        "_blank"
    );
}