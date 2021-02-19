package com.demo.springglobalpopulation;

import com.demo.springglobalpopulation.repo.CityRepo;
import com.demo.springglobalpopulation.repo.CountryRepo;
import com.demo.springglobalpopulation.service.DataLoaderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringGlobalPopulationApplication implements ApplicationRunner {
	@Autowired
	private DataLoaderService dataLoaderService;

	@Autowired
	private CityRepo cityRepo;
	@Autowired
	CountryRepo countryRepo;

	public static void main(String[] args) {
		SpringApplication.run(SpringGlobalPopulationApplication.class, args);

	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		// TODO Auto-generated method stub
		dataLoaderService.loadCityData();

		System.out.println(cityRepo.count());

		dataLoaderService.loadCountryData();

		System.out.println(countryRepo.count());

	}

}
