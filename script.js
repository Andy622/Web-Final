window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,

        title: {
            text: "Recent Ratings"
        },
        axisX: {
            interval: 1
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Rating (out of 5)"
        },
        data: [{
            type: "bar",
            name: "Ratings",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                { y: 3, label: "Sweden" },
                { y: 5, label: "Taiwan" },
                { y: 4, label: "Russia" },
                { y: 2, label: "Spain" },
                { y: 3, label: "Brazil" },
                { y: 1, label: "India" },
                { y: 5, label: "Italy" },
                { y: 4, label: "Australia" },
                { y: 3, label: "Canada" },
            ]
        }]
    });
    chart.render();
}