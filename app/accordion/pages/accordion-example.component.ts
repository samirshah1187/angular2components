import {Component} from 'angular2/core';

import {Accordion} from '../component/accordion.component';
import {AccordionGroup} from '../component/accordion-group.component';

@Component({
    selector: 'my-app',
    templateUrl:'app/accordion/pages/accordion-example.component.html',
    directives: [Accordion, AccordionGroup]
})
export class Angular2Accordion  {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            title: 'PK',
            subject: 'Vinod Chopra Films/Rajkumar Hirani Films',
            date: '2014',
            duration: '₹792 crore (US$120 million)',
            content: 'PK is a 2014 Indian satirical science fiction comedy film.[4][5][6] The film was directed by Rajkumar Hirani, produced by Hirani and Vidhu Vinod Chopra, and written by Hirani and Abhijat Joshi.[7] The film stars Aamir Khan in the title role with Anushka Sharma, Sushant Singh Rajput, Boman Irani, Saurabh Shukla, and Sanjay Dutt in supporting roles. It tells the story of an alien who comes to Earth on a research mission. He befriends a television journalist and questions religious dogmas and superstitions.'
        },
        {
            title: 'Baahubali: The Beginning',
            subject: 'Arka Media Works',
            date: '2015',
            duration: '₹650 crore (US$97 million)',
            content: 'Baahubali: The Beginning (English: The One With Strong Arms) is a 2015 Indian epic historical fiction film directed by S. S. Rajamouli. Produced by Shobu Yarlagadda and Prasad Devineni, it is the first of two cinematic parts and was simultaneously made in Telugu and Tamil.[5][6][7] The film stars Prabhas, Rana Daggubati, Tamannaah and Anushka Shetty in lead roles. Sathyaraj, Ramya Krishnan, Nassar, Adivi Sesh, Tanikella Bharani and Sudeep appear in supporting roles. The soundtrack and background score were composed by M. M. Keeravani while the cinematography, editing, art direction and visual effects supervision were done by K. K. Senthil Kumar, Kotagiri Venkateswara Rao, Sabu Cyril and V. Srinivas Mohan respectively.'
        },
        {
            title: 'Bajrangi Bhaijaan',
            subject: 'Salman Khan Films/Kabir Khan Films',
            date: '2015',
            duration: '₹626 crore (US$93 million)',
            content: 'Bajrangi Bhaijaan (English translation: Brother Bajrangi) is a 2015 Indian drama film directed by Kabir Khan. Written by K. V. Vijayendra Prasad, the film was produced by Salman Khan and Rockline Venkatesh. It stars Salman Khan and Harshaali Malhotra, with Nawazuddin Siddiqui and Kareena Kapoor Khan in supporting roles. Khan stars as Bajrangi, an ardent devotee of Hindu deity Hanuman, who embarks on taking a mute six-year-old Pakistani girl (Malhotra), separated in India from her parents, back to her hometown in Pakistan.'
        }
    ];
}