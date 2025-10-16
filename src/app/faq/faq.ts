import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
questions = [
    {
      question: 'Koji je preporučeni uzrast za vaše igračke?',
      answer:
        'Naše igračke su podeljene u uzrasne grupe: 0-2 godine (bebe), 3-5 godina (predškolci), 6-9 godina (školski uzrast) i 10+ (starija deca i tinejdžeri). Svaka igračka ima jasno označen uzrast na stranici proizvoda.'
    },
    {
      question: 'Da li su vaše igračke bezbedne za malu decu?',
      answer:
        'Da. Igračke za uzrast 0-2 godine napravljene su bez sitnih delova i od bezbednih materijala, idealne su za bebe i mališane.'
    },
    {
      question: 'Koje vrste igračaka nudite?',
      answer:
        'U ponudi imamo različite tipove: slagalice, slikovnice, figure, kreativne setove, vozila, plišane igračke, društvene igre, konstruktorske setove, muzičke i edukativne igračke.'
    },
    {
      question: 'Da li imate igračke namenjene i dečacima i devojčicama?',
      answer:
        'Da. Većina naših igračaka je namenjena za sve uzraste i polove, ali postoje i proizvodi posebno dizajnirani za dečake ili devojčice.'
    },
    {
      question: 'Koji je opseg cena vaših igračaka?',
      answer:
        'Cene se kreću od oko 799 RSD za slikovnice do oko 6999 RSD za složenije setove poput LEGO kompleta i edukativnih mikroskopa.'
    },
    {
      question: 'Da li imate edukativne igračke?',
      answer:
        'Naravno! Edukativne igračke kao što su pametni globus, mikroskop i edukativni tablet podstiču učenje kroz igru i radoznalost.'
    },
    {
      question: 'Od kojih materijala su napravljene vaše igračke?',
      answer:
        'Koristimo drvo, plastiku, metal i tekstil u zavisnosti od vrste igračke. Na primer, slagalice su drvene, plišane igračke su od tekstila, a vozila i figure od metala ili plastike.'
    },
    {
      question: 'Da li nudite društvene igre za porodicu?',
      answer:
        'Da, u ponudi su igre kao što su “Čoveče ne ljuti se”, “Monopol Junior” i “Igra memorije”, idealne za zajedničko druženje i zabavu.'
    },
    {
      question: 'Da li imate LEGO setove?',
      answer:
        'Da. Imamo različite LEGO setove poput “LEGO Classic” i “LEGO City policijska stanica”, namenjene deci uzrasta 6+ i 10+ godina.'
    },
    {
      question: 'Kako mogu pronaći igračku prema uzrastu deteta?',
      answer:
        'Na stranici sa igračkama možete filtrirati proizvode po uzrastu (0-2, 3-5, 6-9, 10+) i tipu igračke kako biste brzo pronašli ono što vam treba.'
    }
  ];
}
