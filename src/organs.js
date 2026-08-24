console.log('[app] src/organs.js loaded');

export const SYSTEMS = [
  {
    id: "cardiovascular",
    name: "Cardiovascular System",
    organs: [
      {
        id: "heart",
        name: "Heart",
        modelPath: "models/heart/",
        modelFile: "heart.glb",
        notes: {
          anatomy: `<p>1. Layers of the Heart WallThe wall of the heart consists of three distinct layers:Epicardium: The outer, protective visceral layer of the serous pericardium.Myocardium: The thick middle layer composed of contracting cardiac muscle fibers.Endocardium: The smooth inner endothelial lining that reduces friction for blood flow.2. Heart ChambersThe heart is divided into four distinct chambers:Right Atrium: Receives deoxygenated blood from the upper and lower body.Right Ventricle: Pumps deoxygenated blood into pulmonary circulation toward the lungs.Left Atrium: Receives oxygenated blood returning from the lungs via pulmonary veins.Left Ventricle: Thickest chamber that pumps oxygenated blood out to the entire body.3. Heart ValvesValves keep blood flowing in a strict, one-way direction:Tricuspid Valve: An atrioventricular (AV) valve between the right atrium and right ventricle.Mitral (Bicuspid) Valve: An AV valve between the left atrium and left ventricle.Pulmonary Valve: A semilunar valve between the right ventricle and pulmonary artery.Aortic Valve: A semilunar valve between the left ventricle and the aorta.4. Great Blood VesselsMajor vessels connect the heart directly to the circulatory system:Venae Cavae: Superior and inferior veins draining deoxygenated blood into the right atrium.Pulmonary Trunk: Splits into left and right pulmonary arteries carrying blood to the lungs.Pulmonary Veins: Four separate veins carrying oxygenated blood back to the left atrium.Aorta: The largest artery distributing oxygenated systemic blood out to the body.5. Electrical Conduction SystemSpecialized structures generate electrical impulses to coordinate rhythmic contractions:Sinoatrial (SA) Node: The primary pacemaker located in the upper right atrium.Atrioventricular (AV) Node: Delays the signal slightly to let atria finish emptying.Bundle of His / Purkinje Fibers: Rapidly distribute the contraction signal through ventricular walls.6. Coronary CirculationThe heart muscle requires its own dedicated blood supply to function:Coronary Arteries: Branch from the base of the aorta to supply the myocardium.Cardiac Veins: Drain deoxygenated blood away from the active heart tissue.Coronary Sinus: Large vein on the posterior surface returning blood to the right atrium.</p>` ,
          biochemistry: `<p>Key enzymes: creatine kinase; energy: ATP from oxidative phosphorylation.</p>`,
          physiology: `<p>Pumping cycle, cardiac output, stroke volume, electrical conduction (SA→AV→Bundle→Purkinje).</p>`,
          parasitology: `<p>Parasites affecting the heart: Trypanosoma cruzi (Chagas disease) causing myocarditis.</p>`,
          microbiology: `<p>Bacterial endocarditis (Staphylococcus aureus, Streptococci) can infect valves.</p>`
        }
      ,
        parts: [
          {
            id: 'left-ventricle',
            name: 'Left Ventricle',
            modelFile: 'heart_left_ventricle.glb',
            notes: {
              anatomy: `<p>Left ventricle: thick muscular wall that pumps oxygenated blood to the systemic circulation.</p>`,
              physiology: `<p>Generates the highest systolic pressure; key in stroke volume and ejection fraction.</p>`,
              biochemistry: `<p>High mitochondrial density to meet ATP demand.</p>`
            }
          },
          {
            id: 'right-ventricle',
            name: 'Right Ventricle',
            modelFile: 'heart_right_ventricle.glb',
            notes: {
              anatomy: `<p>Right ventricle: thinner wall, pumps blood to the pulmonary circulation.</p>`,
              physiology: `<p>Handles low-pressure pulmonary flow; sensitive to afterload.</p>`
            }
          },
          {
            id: 'mitral-valve',
            name: 'Mitral Valve',
            modelFile: 'heart_mitral_valve.glb',
            notes: {
              anatomy: `<p>Valve between left atrium and left ventricle; two leaflets.</p>`,
              clinical: `<p>Mitral regurgitation and stenosis are common valve pathologies.</p>`
            }
          }
        ]
      },
      {
        id: "bloodVessels",
        name: "Blood Vessels",
        modelPath: "models/blood-vessels/",
        modelFile: "blood-vessels.glb",
        notes: {
          anatomy: `<p>Blood vessels include arteries, veins, and capillaries; they transport blood throughout the body.</p>`,
          biochemistry: `<p>Vessel wall composition and vascular tone regulation involve various mediators.</p>`,
          physiology: `<p>Control of blood flow, pressure regulation, and exchange of substances at the capillary level.</p>`,
          parasitology: `<p>Parasites can affect vascular systems; e.g., Plasmodium species cause malaria with vascular complications.</p>`,
          microbiology: `<p>Bacterial infections can lead to vasculitis (e.g., Streptococcus pyogenes).</p>`
        }
      }
    ]
  },
  {
    id: "nervous",
    name: "Nervous System",
    organs: [
      {
        id: "brain",
        name: "Brain",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Large organ composed of cerebrum, cerebellum, brainstem; grey and white matter organization.</p>`,
          biochemistry: `<p>Neurotransmitters: glutamate, GABA, dopamine; energy demands rely on glucose metabolism.</p>`,
          physiology: `<p>Neuronal signaling, synaptic transmission, reflex arcs, higher cognitive functions.</p>`,
          parasitology: `<p>Parasitic CNS infections: Taenia solium (neurocysticercosis) causes seizures.</p>`,
          microbiology: `<p>Bacterial meningitis (Neisseria meningitidis, Streptococcus pneumoniae) impacts the CNS.</p>`
        }
      },
      {
        id: "spinalCord",
        name: "Spinal Cord",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Spinal cord: cylindrical structure; conveys motor and sensory information; protected by vertebrae.</p>`,
          physiology: `<p>Reflex arcs, conduction of nerve impulses between brain and body.</p>`
        }
      }
    ]
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    organs: [
      {
        id: "lungs",
        name: "Lungs",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Paired organs with bronchi, bronchioles, alveoli; large surface area for gas exchange.</p>`,
          biochemistry: `<p>Gas transport involves hemoglobin; oxygen-binding chemistry and CO₂ buffering by bicarbonate.</p>`,
          physiology: `<p>Mechanics of ventilation, diffusion across alveolar-capillary membrane, ventilation-perfusion matching.</p>`,
          parasitology: `<p>Parasitic lung infections: Paragonimus westermani (lung fluke) can cause cysts and cough.</p>`,
          microbiology: `<p>Pneumonia pathogens include Streptococcus pneumoniae, Haemophilus influenzae, Mycobacterium tuberculosis.</p>`
        }
      ,
        parts: [
          {
            id: 'right-lower-lobe',
            name: 'Right Lower Lobe',
            notes: {
              anatomy: `<p>Right lower lobe: largest lobe on the right lung; contains many alveoli.</p>`,
              physiology: `<p>Primary gas-exchange region with high perfusion.</p>`
            }
          },
          {
            id: 'left-upper-lobe',
            name: 'Left Upper Lobe',
            notes: {
              anatomy: `<p>Left upper lobe: contains the lingula; smaller due to cardiac notch.</p>`,
              physiology: `<p>Contributes to ventilation; important in localized lung disease.</p>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "digestive",
    name: "Digestive System",
    organs: [
      {
        id: "liver",
        name: "Liver",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Large gland with lobular architecture; portal triads and sinusoids.</p>`,
          biochemistry: `<p>Metabolic hub: gluconeogenesis, urea cycle, drug metabolism (P450 enzymes).</p>`,
          physiology: `<p>Detoxification, bile production, storage of glycogen, plasma protein synthesis.</p>`,
          parasitology: `<p>Parasites: Fasciola hepatica (liver fluke) invades biliary tree.</p>`,
          microbiology: `<p>Infections: hepatitis viruses (A, B, C) cause hepatic inflammation.</p>`
        }
      ,
        parts: [
          {
            id: 'left-lobe',
            name: 'Left Lobe',
            notes: {
              anatomy: `<p>Left lobe of liver: smaller lobe separated by the falciform ligament.</p>`
            }
          },
          {
            id: 'right-lobe',
            name: 'Right Lobe',
            notes: {
              anatomy: `<p>Right lobe: larger hepatic lobe; primary site for many metabolic activities.</p>`
            }
          }
        ]
      },
      {
        id: "stomach",
        name: "Stomach",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Muscular organ for mechanical and chemical digestion; gastric folds (rugae).</p>`,
          biochemistry: `<p>Gastric acid (HCl) and pepsinogen activation; intrinsic factor for B12 absorption.</p>`,
          physiology: `<p>Secretion, motility, and controlled emptying into the duodenum.</p>`,
          parasitology: `<p>Helminths may inhabit GI tract; some protozoa (Giardia) affect small intestine.</p>`,
          microbiology: `<p>Helicobacter pylori colonizes the stomach and is linked to ulcers.</p>`
        }
      }
    ]
  },
  {
    id: "urinary",
    name: "Urinary System",
    organs: [
      {
        id: "kidney",
        name: "Kidney",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Paired organs with cortex and medulla; functional unit = nephron.</p>`,
          biochemistry: `<p>Electrolyte handling, acid-base regulation, drug clearance.</p>`,
          physiology: `<p>Filtration, reabsorption, secretion, urine concentration via countercurrent mechanism.</p>`,
          parasitology: `<p>Schistosoma haematobium primarily affects urinary tract causing hematuria.</p>`,
          microbiology: `<p>UTI pathogens: Escherichia coli, Proteus, Klebsiella species.</p>`
        }
      },
      {
        id: "bladder",
        name: "Bladder",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Muscular sac for urine storage; lined by transitional epithelium.</p>`,
          physiology: `<p>Stores and expels urine via coordinated detrusor muscle contraction and sphincter relaxation.</p>`
        }
      },
      {
        id: "urethra",
        name: "Urethra",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Tube conveying urine from bladder to exterior; lined by transitional epithelium.</p>`,
          physiology: `<p>Conducts urine out of the body; in males also conveys semen.</p>`
        }
      },
      {
        id: "ureter",
        name: "Ureter",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Tube conveying urine from kidney to bladder; lined by transitional epithelium.</p>`,
          physiology: `<p>Conducts urine from kidney to bladder via peristaltic contractions.</p>`
        }
      },
      {
        id: "adrenalGlands",
        name: "Adrenal Glands",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Paired glands located above the kidneys; cortex produces corticosteroids, medulla produces catecholamines.</p>`,
          physiology: `<p>Regulation of metabolism, stress response, and electrolyte balance.</p>`
        }
      },
      {
        id: "prostate",
        name: "Prostate",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Gland surrounding the urethra in males; produces seminal fluid.</p>`,
          physiology: `<p>Contributes to semen production and ejaculation.</p>`
        }
      }
    ]
  },
  {
    id: "endocrine",
    name: "Endocrine System",
    organs: [
      {
        id: "pancreas",
        name: "Pancreas",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Has exocrine acinar tissue and endocrine islets of Langerhans (alpha, beta, delta cells).</p>`,
          biochemistry: `<p>Insulin and glucagon regulate glucose homeostasis; intracellular signaling pathways.</p>`,
          physiology: `<p>Endocrine regulation of metabolism, digestion via enzymes and hormones.</p>`,
          parasitology: `<p>Rare parasitic invasion; systemic parasites can affect pancreatic function indirectly.</p>`,
          microbiology: `<p>Infections can lead to pancreatitis; some viruses (mumps) are implicated.</p>`
        }
      }
    ]
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal System",
    organs: [
      {
        id: "skeleton",
        name: "Bones / Skeleton",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>206 bones in adult human; axial and appendicular skeleton; bone microarchitecture.</p>`,
          biochemistry: `<p>Bone matrix contains collagen and hydroxyapatite; calcium/phosphate homeostasis.</p>`,
          physiology: `<p>Support, leverage for movement, mineral storage, hematopoiesis in marrow.</p>`,
          parasitology: `<p>Some parasites can affect bone indirectly; direct bone parasites are rare.</p>`,
          microbiology: `<p>Osteomyelitis commonly from Staphylococcus aureus infection.</p>`
        }
      }
    ]
  },
  {
    id: "lymphatic",
    name: "Lymphatic / Immune System",
    organs: [
      {
        id: "spleen",
        name: "Spleen",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Organ for filtering blood; white pulp (immune) and red pulp (erythrocyte removal).</p>`,
          biochemistry: `<p>Immune signaling molecules, complement, antibody production interactions.</p>`,
          physiology: `<p>Immune response coordination and clearance of aged red cells.</p>`,
          parasitology: `<p>Malaria parasites replicate in RBCs and the spleen is central to clearance.</p>`,
          microbiology: `<p>Splenic dysfunction increases susceptibility to encapsulated organisms (e.g., Streptococcus pneumoniae).</p>`
        }
      }
    ]
  },
  {
    id: "integumentary",
    name: "Integumentary System",
    organs: [
      {
        id: "skin",
        name: "Skin",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Largest organ; epidermis, dermis, and subcutaneous tissue; barrier functions.</p>`,
          biochemistry: `<p>Keratin and lipid barriers; vitamin D synthesis in skin.</p>`,
          physiology: `<p>Thermoregulation, protection, sensation.</p>`,
          parasitology: `<p>Skin parasites: scabies (Sarcoptes scabiei), some cutaneous leishmaniasis species.</p>`,
          microbiology: `<p>Skin flora: Staphylococcus epidermidis; Staphylococcus aureus can cause infections.</p>`
        }
      }
    ]
  },
  {
    id: "sensory",
    name: "Sensory Organs",
    organs: [
      {
        id: "eye",
        name: "Eye",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Optical organ with cornea, lens, retina; photoreceptors convert light to neural signals.</p>`,
          biochemistry: `<p>Visual pigments (rhodopsin), retinoid cycle in photoreceptors.</p>`,
          physiology: `<p>Refraction, accommodation, phototransduction.</p>`,
          parasitology: `<p>Some parasites can invade ocular tissues in endemic areas (e.g., Onchocerca volvulus causing river blindness).</p>`,
          microbiology: `<p>Conjunctivitis pathogens include Staphylococcus, Streptococcus, adenovirus.</p>`
        }
      },
      {
        id: "ear",
        name: "Ear",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Organ for hearing and balance; outer, middle, and inner ear structures.</p>`,
          biochemistry: `<p>Auditory transduction involves ion channels and neurotransmitters in hair cells.</p>`,
          physiology: `<p>Hearing, balance, and spatial orientation.</p>`,
          parasitology: `<p>Rarely affected by parasites; some systemic parasites can impact inner ear function.</p>`,
          microbiology: `<p>Otitis media commonly caused by Streptococcus pneumoniae, Haemophilus influenzae.</p>`
        }
      },
      {
        id: "nose",
        name: "Nose",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Organ for olfaction and air passage; nasal cavity, septum, and turbinates.</p>`,
          physiology: `<p>Olfaction, air filtration, humidification, and resonance of voice.</p>`,
          parasitology: `<p>Rarely affected by parasites; some systemic parasites can impact nasal tissues.</p>`,
          microbiology: `<p>Common pathogens include Streptococcus pneumoniae, Haemophilus influenzae, and viruses causing rhinitis.</p>`
        }
      },
      {
        id: "tongue",
        name: "Tongue",
        modelPath: null,
        modelFile: null,
        notes: {
          anatomy: `<p>Muscular organ in the oral cavity; involved in taste, mastication, and speech.</p>`,
          physiology: `<p>Taste perception, manipulation of food, and articulation of speech.</p>`,
          parasitology: `<p>Rarely affected by parasites; some systemic parasites can impact tongue tissues.</p>`,
          microbiology: `<p>Oral flora includes Streptococcus species; Candida can cause oral thrush.</p>`
        }
      }
    ]
  }
];
