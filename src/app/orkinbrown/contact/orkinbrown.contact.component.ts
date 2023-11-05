import { Component, OnInit } from '@angular/core';
import { AzureService } from '../../shared/services/azure.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'orkinbrown-app-contact',
    templateUrl: './orkinbrown.contact.component.html',
    styleUrls: ['./orkinbrown.contact.component.scss']
})

export class OrkinBrownContactComponent implements OnInit {
  focus: any;
  focus1: any;
  contactForm: FormGroup;

  constructor(private builder: FormBuilder, private azureSevice: AzureService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.azureSevice.postData(this.contactForm.value).subscribe({
      next: (v) => this.routeResult("success", "Successful call"),
      error: (e) => this.routeResult("failure", e.message),
    })

  }

  routeResult(result: string, message: string) {
    console.log(message)
    this.router.navigate(["/ob/contact", result]);
  }

}