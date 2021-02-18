package com.demo.springglobalpopulation.repo;

import com.demo.springglobalpopulation.domain.Country;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepo extends JpaRepository<Country, String> {
}
