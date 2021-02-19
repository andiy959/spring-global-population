package com.demo.springglobalpopulation.controler;

import java.util.List;

import com.demo.springglobalpopulation.domain.City;
import com.demo.springglobalpopulation.domain.Country;
import com.demo.springglobalpopulation.service.DBService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/population")
public class PopulationControler {

    @Autowired
    private DBService dbService;

    @GetMapping("country/all")

    public List<Country> getAllCountries() {
        return dbService.getAllCountries();

    }

    @GetMapping("country/continent/{continent}")
    public List<Country> getAllCoutriesByContinent(@PathVariable String continent) {
        return getAllCoutriesByContinent(continent);
    }

    @GetMapping("country/top/{top}")
    public List<Country> getTopCountries(@PathVariable int top) {
        return dbService.getWorldTopCountries(top);
    }

    @GetMapping("country/continent/{continent}/{top}")
    public List<Country> getTopCountriesByContinent(@PathVariable int top, @PathVariable String continent) {
        return dbService.getContinentTopCountries(continent, top);
    }

    @GetMapping("/city/all")
    public List<City> getAllcities() {
        return dbService.getAllCities();

    }

    @GetMapping("/city/continent/{continent}")
    public List<City> getCitiesByContinent(@PathVariable String continent) {
        return dbService.getAllCitiesByContinent(continent);
    }

    @GetMapping("city/country/{country}")
    public List<City> getallCitiesByCountry(@PathVariable String country) {
        return dbService.findAllCitiesByCountry(country);
    }

    @GetMapping("city/top/world/{top}")
    public List<City> getTopWorldCities(@PathVariable int top) {
        return dbService.topCities(top);
    }

    @GetMapping("city/top/continent/{continent}/{top}")

    public List<City> gettopCitiesByContinent(@PathVariable String continent, int top) {
        return dbService.topCapitalCitiesByContinent(continent, top);
    }

    @GetMapping("city/top/country/{country}/{top}")
    public List<City> getTopCitiesByCountry(@PathVariable String country, int top) {
        return dbService.topCitiesByCountry(country, top);
    }

    @GetMapping("/capital/all")

    public List<City> getAllCapitalCities() {
        return dbService.getAllCapitalCities();
    }

    @GetMapping("/capital/continent/{continent}")
    public List<City> getAllCapitalCitiesByContinent(@PathVariable String continent) {
        return dbService.getAllCapitalCitiesByContinent(continent);

    }

    @GetMapping("/capital/top/{top}")
    public List<City> topCapitalCities(@PathVariable int top) {
        return dbService.topCapitalCities(top);
    }

    @GetMapping("/capita/top/continent/{continent}/{top}")
    public List<City> topCapitalCityByContinent(@PathVariable String continent, int top) {
        return dbService.topCapitalCitiesByContinent(continent, top);
    }

}
