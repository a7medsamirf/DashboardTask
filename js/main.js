    // Material Select Initialization
    $(document).ready(function () {
        $('.mdb-select').materialSelect();
    });
    // Data Picker Initialization
$('.datepicker').datepicker({
    inline: true
  });
    //pie
    var ctxP = document.getElementById("doughnutChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [28, 58, 13],
                backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"]
            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 70,
        }
    });
    //pie
    var ctxP = document.getElementById("doughnutChart0").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [30, 65, 7],
                backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"],

            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 70,
        }
    });

    //pie
    var ctxP = document.getElementById("doughnutChart1").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [8.24, 83.52, 8.25],
                backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"],

            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 70,
        }
    });
    //pie
    var ctxP = document.getElementById("doughnutChart2").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [20.24, 72.52, 8.25],
                backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"],

            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 70,
        }
    });
        //pie
        var ctxP = document.getElementById("doughnutChart3").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [34.88, 58.32, 6.80],
                    backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                    hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
    
                }]
            },
            options: {
                responsive: true,
                cutoutPercentage: 70,
            }
        });
                //pie
                var ctxP = document.getElementById("doughnutChart4").getContext('2d');
                var myPieChart = new Chart(ctxP, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [16.05, 76.78, 221.06],
                            backgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
                            hoverBackgroundColor: ["#36793d", "#458fb3", "#dc4d90"],
            
                        }]
                    },
                    options: {
                        responsive: true,
                        cutoutPercentage: 70,
                    }
                });


                      //pie
                      var ctxP = document.getElementById("RejectionsChart").getContext('2d');
                      var myPieChart = new Chart(ctxP, {
                          type: 'doughnut',
                          data: {
                              datasets: [{
                                  data: [16],
                                  backgroundColor: ["#808080"],
                                  hoverBackgroundColor: ["#808080"],
                  
                              }]
                          },
                          options: {
                              responsive: true,
                          }
                      });

                          //pie
                          var ctxP = document.getElementById("RejectionsChart0").getContext('2d');
                          var myPieChart = new Chart(ctxP, {
                              type: 'doughnut',
                              data: {
                                  datasets: [{
                                      data: [16.05],
                                      backgroundColor: ["#808080"],
                                      hoverBackgroundColor: ["#808080"],
                      
                                  }]
                              },
                              options: {
                                  responsive: true,
                              }
                          });

                              //pie
                      var ctxP = document.getElementById("RejectionsChart1").getContext('2d');
                      var myPieChart = new Chart(ctxP, {
                          type: 'doughnut',
                          data: {
                              datasets: [{
                                  data: [18.05],
                                  backgroundColor: ["#808080"],
                                  hoverBackgroundColor: ["#808080"],
                  
                              }]
                          },
                          options: {
                              responsive: true,
                          }
                      });








