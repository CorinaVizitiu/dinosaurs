
import { useState, useEffect } from 'react';
import Dinosaurs from './components/dinosaurs';
import './styles/app.scss';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import image1 from './img/1.webp';
import image2 from './img/2.webp';
import image3 from './img/3.webp';
import image4 from './img/4.webp';
import image5 from './img/5.webp';
import image6 from './img/6.webp';
import image7 from './img/7.webp';
import image8 from './img/8.webp';
import image9 from './img/9.webp';
import image10 from './img/10.webp';
import image11 from './img/11.webp';
import image12 from './img/12.webp';
import image13 from './img/13.webp';
import image14 from './img/14.webp';
import image15 from './img/15.webp';
import image16 from './img/16.webp';
import image17 from './img/17.webp';
import image18 from './img/18.webp';
import image19 from './img/19.webp';
import image20 from './img/20.webp';
import image21 from './img/21.webp';
import image22 from './img/22.webp';
import logo from './img/logo.jpg';

const allDinos=[
  {
    "id":1,
    "name": "Laquintasaura (La Quinta lizard); pronounced la-KWIN-tah-SORE-ah",
    "habitat": "Woodlands of South America",
    "birth": 200 ,
    'death':250,
    "sizeandWeight": "About three feet long and 10 pounds",
    "diet": "Plants; possibly insects as well",
    "distinguishingCharacteristics": " Small size; bipedal posture; distinctively serrated teeth",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image":image1
  },
  {
    "id": 2,
    "name": "Aardonyx (Greek for 'earth claw'); pronounced ARD-oh-nix",
    "habitat": " Woodlands of southern Africa",
    "birth": 195,
    'death':220,
    "sizeandWeight": "About 20 feet long and 1,000 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": " Small size; bipedal posture; distinctively serrated teeth",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image2
  },
  {
    "id": 3,
    "name": "Bravoceratops (Greek for 'wild horned face'); pronounced BRAH-voe-SEH-rah-tops",
    "habitat": "Woodlands of southern North America",
    "birth": 70 ,
    'death':100,
    "sizeandWeight": "Undisclosed",
    "diet": "Plants",
    "distinguishingCharacteristics": "Narrow snout; horns above eyes; large frill",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image3
  },
  {
    "id": 4,
    "name": "Aristosuchus (Greek for 'noble crocodile'); pronounced AH-riss-toe-SOO-kuss",
    "habitat": "Woodlands of western Europe",
    "birth": 125 ,
    'death':150,
    "Sizean Weight": "About six feet long and 50 pounds",
    "diet": "Meat",
    "distinguishingCharacteristics": " Small size; bipedal posture",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image4
  },
  {
    "id": 5,
    "name": "Planicoxa (Greek for 'flat ilium'); pronounced PLAN-ih-COK-sah",
    "habitat": "Woodlands of North America",
    "birth": 125 ,
    'death':145,
    "sizeandWeight": " About 18 feet long and 1-2 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Squat torso; occasional bipedal posture",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image5
  },
  {
    "id": 6,
    "name": "Dryosaurus (Greek for 'oak lizard'); pronounced DRY-oh-SORE-us",
    "habitat": "Woodlands of Africa and North America",
    "birth": 155,
    'death':190,
    "sizeandWeight": " About 10 feet long and 200 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": "Long neck; five-fingered hands; stiff tail",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image6
  },
  {
    "id": 7,
    "name": "Agilisaurus (Greek for 'agile lizard'); pronounced AH-jih-lih-SORE-us",
    "habitat": "Woodlands of eastern Asia",
    "birth": 170,
    'death':190,
    "sizeandWeight": "About four feet long and 75-100 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": "Small size; lightweight build; stiff tail",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image7
  },
  {
    "id": 8,
    "name": "Xiaosaurus (Chinese/Greek for 'little lizard'); pronounced show-SORE-us",
    "habitat": "Woodlands of Asia",
    "birth": 170,
    'death':185,
    "sizeandWeight": "About five feet long and 75-100 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": "Small size; bipedal posture; leaf-shaped teeth",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image8
  },
  {
    "id": 9,
    "name": "Abrosaurus (Greek for 'delicate lizard'); pronounced AB-roe-SORE-us",
    "habitat": "Woodlands of Asia",
    "birth": 165,
    'death':199,
    "sizeandWeight": "About 30 feet long and five tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Moderate size; short, boxy skull",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image9
  },
  {
    "id": 10,
    "name": "Barapasaurus (Greek for 'big-legged lizard'); pronounced bah-RAP-oh-SORE-us",
    "habitat": "Plains of southern Asia",
    "birth": 190,
    'death':200,
    "sizeandWeight": "About 60 feet long and 20 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Long legs and neck; short, deep head",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image10
  },
  {
    "id": 11,
    "name": "Alvarezsaurus (Greek for 'Alvarez's lizard'); pronounced al-vah-rez-SORE-us",
    "habitat": "Woodlands of South America",
    "birth": 85 ,
    'death':111,
    "Size ndWeight": "About 6 feet long and 30-40 pounds",
    "diet": "Probably insects",
    "distinguishingCharacteristics": "Long legs and tail; probably feathers",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image11
  },
  {
    "id": 12,
    "name": "Cerasinops (Greek for 'lesser horned face'); pronounced SEH-rah-SIGH-nops",
    "habitat": "Woodlands of North America",
    "birth": 85 ,
    'death':100,
    "sizeandWeight": "About eight feet long and 400 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": "Relatively small size; blunt head with horned beak",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image12
  },
  {
    "id": 13,
    "name": "Ornithopsis (Greek for 'bird face'); pronounced OR-nih-THOP-sis",
    "habitat": "Woodlands of western Europe",
    "birth": 125 ,
    'death':133,
    "sizeandWeight": "Unknown",
    "diet": "Plants",
    "distinguishingCharacteristics": "Moderate size; long neck and tail; possibly armor",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image13
  },
  {
    "id": 14,
    "name": "Jeyawati (Zuni Indian for 'grinding mouth'); pronounced HEY-ah-WATT-ee",
    "habitat": "Woodlands of western North America",
    "birth": 95,
    'death':133,
    "sizeandWeight": "About 20 feet long and 1,000-2,000 pounds",
    "diet": "Plants",
    "Distinguishing Characteristics": "Wrinkly growths around eyes; sophisticated teeth and jaws",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image14
  },
  {
    "id": 15,
    "name": "Achelousaurus (Greek for 'Achelous lizard'); pronounced AH-kell-oo-SORE-us",
    "habitat": "Woodlands of North America",
    "birth": 80,
    'death':99,
    "sizeandWeight": "About 20 feet long and one ton",
    "diet": "Plants",
    "distinguishingCharacteristics": "Medium size; large frill; bony knobs above eyes",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image15
  },
  {
    "id": 16,
    "name": "Overosaurus ('Cerro Overo lizard'); pronounced OH-veh-roe-SORE-us",
    "habitat": "Plains of South America",
    "birth": 80 ,
    'death':101,
    "sizeandWeight": "About 30 feet long and 5 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Small size; long neck and tail",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image16
  },
  {
    "id": 17,
    "name": "Isisaurus (the acronym for 'Indian Statistical Institute lizard'); pronounced EYE-sis-SORE-us",
    "habitat": "Woodlands of central Asia",
    "birth": 70,
    'death':109,
    "sizeandWeight": "About 55 feet long and 15 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Short, horizontally oriented neck; strong forelimbs",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image17
  },
  {
    "id": 18,
    "name": "Dreadnoughtus (after the battleships were known as 'dreadnoughts'); pronounced dred-NAW-tuss",
    "habitat": "Plains of South America",
    "birth": 77 ,
    'death':99,
    "sizeandWeight": " About 85 feet long and 60 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Enormous size; long neck and tail",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image18
  },
  {
    "id": 19,
    "name": "Byronosaurus (Greek for 'Byron's lizard'); pronounced BUY-ron-oh-SORE-us",
    "habitat": " Deserts of central Asia",
    "birth": 85,
    'death':99,
    "sizeandWeight": "About 5-6 feet long and 10-20 pounds",
    "diet": "Meat",
    "distinguishingCharacteristics": "Moderate size; long snout with needle-like teeth",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image19
  },
  {
    "id": 20,
    "name": "Hesperonychus (Greek for 'western claw'); pronounced HESS-peh-RON-ih-cuss",
    "habitat": "Woodlands of North America",
    "birth":75,
    'death':88,
    "sizeandWeight": "About two feet long and 3-5 pounds",
    "diet": "Probably insects",
    "distinguishingCharacteristics": "Small size; long tail; feathers",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image20
  },
  {
    "id": 21,
    "name": "Quaesitosaurus (Greek for 'extraordinary lizard'); pronounced KWAY-sit-oh-SORE-us",
    "habitat": "Woodlands of Central Asia",
    "birth": 85,
    'death':121,
    "sizeandWeight": "About 75 feet long and 50-60 tons",
    "diet": "Plants",
    "distinguishingCharacteristics": "Small head with large ear openings",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image21
  },
  {
    "id": 22,
    "name": "Aquilops (Greek for 'eagle face'); pronounced ACK-will-ops",
    "habitat": "Woodlands of North America",
    "birth": 110,
    'death':148,
    "sizeandWeight": "About two feet long and 3-5 pounds",
    "diet": "Plants",
    "distinguishingCharacteristics": "Small size; beaked snout",
    'link':'https://www.britannica.com/animal/dinosaur',
    "image": image22
  }
];
const marks = [
  {
    value: 200,
    label: '200 '
  },
  {
    value: 195,
    label: '195 '
  },
  {
    value: 190 ,
    label: '190 '
  },
  {
    value: 170 ,
    label: '170 '
  },

  {
    value: 165 ,
    label: '165'
  },
  {
    value: 155 ,
    label: '155 '
  },
  {
    value: 125,
    label: '125 '
  },

  {
    value: 125,
    label: '125 '
  },
  {
    value: 110,
    label: '110 '
  },
  {
    value: 95 ,
    label: '95 '
  },
  {
    value: 85,
    label: '85 '
  },

  {
    value: 80,
    label: '80'
  },
  {
    value: 85,
    label: '85 '
  },

  {
    value: 80,
    label: '80 '
  },
  {
    value: 77,
    label: '77 '
  },
  {
    value: 75,
    label: '75 '
  },
  {
    value: 70,
    label: '70 '
  },

];
const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
function App() {
  const [selectedDinosaurs, setSelectedDinosaurs] = useState([]);
  const handleSliderChange = (event, value) => {
    setSelectedDinosaurs(allDinos.filter(element => {
      return value >=element.birth && value <= element.death
    }))

  }
  useEffect(() => {
    handleSliderChange('', 125)
  }, [])
  return (
    <div className="App">
      <header>
      <img src={logo} alt="logo" />
        <p className='title'> Short history of dinosaurs that lived millions of years ago in different historical periods (Early Jurassic,Early Cretaceous,Middle Cretaceous ,Late Cretaceous,Early-middle Jurassic, Middle Jurassic ,Late Jurassic ,) </p>
      
      </header>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={125}
        marks={marks} min={65} max={220}
        onChange={handleSliderChange} onChangeCommitted={handleSliderChange}
      />
      <Dinosaurs selectedDinosaurs={selectedDinosaurs} />
    </div>
  );
}
export default App;