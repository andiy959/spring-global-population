package com.demo.springglobalpopulation.controler;

import java.util.List;

import com.demo.springglobalpopulation.domain.City;
import com.demo.springglobalpopulation.domain.Country;
import com.demo.springglobalpopulation.service.DBService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/population/")
@CrossOrigin("*")
public class PopulationControler {

    @Autowired
    private DBService dbService;

    @GetMapping("country/all")

    public List<Country> getAllCountries() {
        return dbService.getAllCountries();

    }

    @GetMapping("country/continent")
    public List<Country> getAllCoutriesByContinent(@RequestParam String continent) {
        return dbService.getAllByContinent(continent);
    }

    @GetMapping("country/top")
    public List<Country> getTopCountries(@RequestParam int top) {
        return dbService.getWorldTopCountries(top);
    }

    @GetMapping("country/continent/top")
    public List<Country> getTopCountriesByContinent(@RequestParam int top, @RequestParam String continent) {
        return dbService.getContinentTopCountries(continent, top);
    }

    @GetMapping("city/all")
    public List<City> getAllcities() {
        return dbService.getAllCities();

    }

    @GetMapping("city/continent")
    public List<City> getCitiesByContinent(@RequestParam String continent) {
        return dbService.getAllCitiesByContinent(continent);
    }

    @GetMapping("city/country")
    public List<City> getallCitiesByCountry(@RequestParam String country) {
        return dbService.findAllCitiesByCountry(country);
    }

    @GetMapping("city/top/world")
    public List<City> getTopWorldCities(@RequestParam int top) {
        return dbService.topCities(top);
    }

    @GetMapping("city/top/continent/top")

    public List<City> gettopCitiesByContinent(@RequestParam String continent, @RequestParam int top) {
        return dbService.topCapitalCitiesByContinent(continent, top);
    }

    @GetMapping("city/top/country/top")
    public List<City> getTopCitiesByCountry(@RequestParam String country, @RequestParam int top) {
        return dbService.topCitiesByCountry(country, top);
    }

    @GetMapping("capital/all")

    public List<City> getAllCapitalCities() {
        return dbService.getAllCapitalCities();
    }

    @GetMapping("capital/continent")
    public List<City> getAllCapitalCitiesByContinent(@RequestParam String continent) {
        return dbService.getAllCapitalCitiesByContinent(continent);

    }

    @GetMapping("capital/top")
    public List<City> topCapitalCities(@RequestParam int top) {
        return dbService.topCapitalCities(top);
    }

    @GetMapping("capital/top/continent")
    public List<City> topCapitalCityByContinent(@RequestParam String continent, @RequestParam int top) {
        return dbService.topCapitalCitiesByContinent(continent, top);
    }

}
