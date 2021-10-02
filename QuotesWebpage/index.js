
        const quote = document.querySelector('#quotes');
        const author = document.querySelector('#author');
        const btn = document.querySelector('#btn-random');
        const tweetbtn = document.querySelector('#tweet-btn');

        let realData = "";

        const getNewQuotes = () => {
            let rnum = Math.trunc(Math.random() * 1642);
            quotesData = realData[rnum];
            quote.innerHTML = `${quotesData.text}`;
            quotesData.author == null ? (author.innerText = unKnown) : (author.innerText = `${quotesData.author}`)
        }

        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes()
            } catch (error) { }
        };

        btn.addEventListener("click", getQuotes);

        const tweetNow = () => {
            let tweetPost = "https://twitter.com/intent/tweet";
            window.open(tweetPost);
        }

        tweetbtn.addEventListener("click", tweetNow);
    