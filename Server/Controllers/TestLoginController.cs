using Microsoft.AspNetCore.Mvc;

namespace FitApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestLoginController: ControllerBase
{
    // private static readonly string[] Summaries = new[]
    // {
    //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    // };
    //
    // [HttpGet]
    // public IEnumerable<WeatherForecast> Get()
    // {
    //     {
    //         var forecast = Enumerable.Range(1, 5).Select(index =>
    //             new WeatherForecast
    //             (
    //                 DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
    //                 Random.Shared.Next(-20, 55),
    //                 Summaries[Random.Shared.Next(Summaries.Length)]
    //             ))
    //         .ToArray();
    //         return forecast;
    //     }
    // }
    //
    // public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
    // {
    //     public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    // }
}