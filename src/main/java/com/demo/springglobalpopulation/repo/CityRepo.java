package com.demo.springglobalpopulation.repo;

import com.demo.springglobalpopulation.domain.City;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepo extends JpaRepository<City, String> {

}
