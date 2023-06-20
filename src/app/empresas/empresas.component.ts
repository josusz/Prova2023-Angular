import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  companies: Company[] = [];
  formGroupCompany: FormGroup;
  isEditing: boolean = false;
  active: boolean = true;
  selectedCategory: string = 'Regional';

  constructor(private CompanyService: CompanyService, formBuilder: FormBuilder){
    this.formGroupCompany = formBuilder.group({
      id: [''],
      name: [''],
      active: ['true'],
      category: ['Regional'],
      contact: ['']
    })
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(){
    this.CompanyService.getCompanies().subscribe({
      next: data => this.companies = data,
      error: (msg) => console.log("Erro ao chamar o ENDPOINT..." + msg)
    });
  }

  save(){
    this.CompanyService.save(this.formGroupCompany.value).subscribe({
      next: data => {
        this.companies.push(data);
        this.formGroupCompany.reset();
      }});
    }
  }
