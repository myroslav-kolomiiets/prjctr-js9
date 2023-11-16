export class CalendarAPI {
    #apiUrl;
    #isFetching;
    #abortController;
    #apiKey;

    constructor() {
        this.#apiUrl = 'https://calendarific.com/api/v2/holidays';
        this.#apiKey = 'take your key';
        this.#isFetching = false;
        this.#abortController = null;
    }

    logResult = (data) => {
        console.log(data);
    }

    getData = async () => {
        this.#isFetching = true;

        if (this.#abortController) {
            try {
                console.log(this.#abortController)
                this.#abortController.abort();
            } catch (error) {
                throw new Error(error);
            }
        }

        const abortController = new AbortController();
        const signal = abortController.signal;
        this.#abortController = abortController;

        try {
            const response = await fetch(`${this.#apiUrl}?api_key=${this.#apiKey}&country=US&year=2019`, {signal});
            return await response.json();
        } catch (error) {
            throw new Error(error);
        } finally {
            this.#isFetching = false;
        }
    };
}
