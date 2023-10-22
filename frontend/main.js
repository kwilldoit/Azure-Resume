window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount().then(count => {
        if (count !== undefined) {
            document.getElementById("counter").innerText = count;
        } else {
            document.getElementById("counter").innerText = "Data not available";
        }
    }).catch(error => {
        console.error(error);
    });
});

const functionApi = 'http://localhost:7071/api/KWCounterTrigger1';

const getVisitCount = async () => {
    try {
        const response = await fetch(functionApi);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Website called functionAPI");
        console.log("Data from API:", data);

        if (data && data.length > 0 && data[0].count !== undefined) {
            const count = typeof data[0].count === "string"
                ? parseInt(data[0].count, 10)
                : data[0].count;

            return count.toString();
        } else {
            return "Data not available";
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
