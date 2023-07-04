function temperatureConversion() {
    var input = document.getElementById("input").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var output = document.getElementById("output");
  
    if (inputUnit === "celsius") {
      var fahrenheit = (input * 9/5) + 32;
      var kelvin = parseFloat(input) + 273.15;
      output.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(3) + "°F<br>" +
                             "Kelvin: " + kelvin.toFixed(3) + " K";
    } else if (inputUnit === "fahrenheit") {
      var celsius = (input - 32) * 5/9;
      var kelvin = (input - 32) * 5/9 + 273.15;
      output.innerHTML = "Celsius: " + celsius.toFixed(3) + "°C<br>" +
                             "Kelvin: " + kelvin.toFixed(3) + " K";
    } else if (inputUnit === "kelvin") {
      var celsius = input - 273.15;
      var fahrenheit = (input - 273.15) * 9/5 + 32;
      output.innerHTML = "Celsius: " + celsius.toFixed(3) + "°C<br>" +
                             "Fahrenheit: " + fahrenheit.toFixed(3) + "°F";
    }
  }