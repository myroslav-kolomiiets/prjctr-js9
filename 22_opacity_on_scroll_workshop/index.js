(() => {
    const textElements = document.querySelectorAll('.content-text');

    const generateRange = () => {
        const arr = [];
        let count = 0;
        while (count < 1) {
            arr.push(count);
            count += 0.01;
        }
        return arr;
    }

    const intersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            entry.target.style.opacity = entry.intersectionRatio;
        });
    }

    const intersectionObserverOptions = {
        root: null,
        threshold: generateRange()
    };

    const intersectionObserver = new IntersectionObserver(
        intersectionObserverCallback,
        intersectionObserverOptions,
    );

    for (const textElement of textElements) {
        intersectionObserver.observe(textElement);
    }
})();
