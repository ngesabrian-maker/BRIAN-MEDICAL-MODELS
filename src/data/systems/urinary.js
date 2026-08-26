export const urinarySystem = {
  id: "urinary",
  name: "Urinary System",

  organs: [
    {
      id: "kidney",
      name: "Kidney",
      modelPath: "models/kidney/",
      modelFile: "kidney.glb",

      notes: {
        anatomy: `
          <h2>Kidney Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The kidneys are paired retroperitoneal organs located on the posterior abdominal wall.
            They maintain internal homeostasis by filtering plasma, modifying the filtrate and
            producing urine.
          </p>

          <h3>External Anatomy</h3>
          <ul>
            <li>Superior pole</li>
            <li>Inferior pole</li>
            <li>Anterior surface</li>
            <li>Posterior surface</li>
            <li>Lateral border</li>
            <li>Medial border</li>
            <li>Renal hilum</li>
          </ul>

          <h3>Internal Anatomy</h3>
          <ul>
            <li><strong>Renal cortex</strong></li>
            <li><strong>Renal medulla</strong></li>
            <li><strong>Renal pyramids</strong></li>
            <li><strong>Renal papillae</strong></li>
            <li><strong>Minor calyces</strong></li>
            <li><strong>Major calyces</strong></li>
            <li><strong>Renal pelvis</strong></li>
          </ul>

          <h3>Nephron</h3>
          <p>
            The nephron is the functional unit of the kidney.
          </p>

          <ul>
            <li>Renal corpuscle</li>
            <li>Glomerulus</li>
            <li>Bowman's capsule</li>
            <li>Proximal convoluted tubule</li>
            <li>Loop of Henle</li>
            <li>Distal convoluted tubule</li>
            <li>Collecting duct</li>
          </ul>

          <h3>Renal Blood Supply</h3>
          <p>
            Renal arteries arise from the abdominal aorta. Blood passes through progressively
            smaller arterial branches before reaching the glomerular capillaries.
          </p>
        `,

        physiology: `
          <h2>Renal Physiology</h2>

          <h3>Major Functions</h3>
          <ul>
            <li>Glomerular filtration</li>
            <li>Tubular reabsorption</li>
            <li>Tubular secretion</li>
            <li>Urine formation</li>
            <li>Electrolyte regulation</li>
            <li>Acid-base regulation</li>
            <li>Fluid balance</li>
            <li>Blood pressure regulation</li>
            <li>Endocrine functions</li>
          </ul>

          <h3>Glomerular Filtration</h3>
          <p>
            Blood enters the glomerular capillaries under pressure. Water and small solutes are
            filtered into Bowman's space while cells and most plasma proteins remain within the
            circulation.
          </p>

          <h3>Tubular Reabsorption</h3>
          <p>
            Useful substances such as glucose, amino acids, sodium and water are selectively
            reabsorbed from tubular fluid into the circulation.
          </p>

          <h3>Tubular Secretion</h3>
          <p>
            Certain substances are transported from blood into tubular fluid, including hydrogen
            ions, potassium and various organic compounds.
          </p>

          <h3>Concentration of Urine</h3>
          <p>
            The loop of Henle, medullary osmotic gradient, collecting ducts and antidiuretic
            hormone contribute to regulation of urine concentration.
          </p>

          <h3>Hormonal Functions</h3>
          <ul>
            <li><strong>Renin:</strong> participates in blood pressure regulation.</li>
            <li><strong>Erythropoietin:</strong> stimulates red blood cell production.</li>
            <li><strong>Calcitriol:</strong> active vitamin D metabolite important in calcium homeostasis.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Kidney Biochemistry</h2>

          <h3>Acid-Base Regulation</h3>
          <p>
            The kidneys maintain acid-base balance by reabsorbing bicarbonate, secreting hydrogen
            ions and generating new bicarbonate.
          </p>

          <h3>Electrolytes</h3>
          <p>
            Renal tubular mechanisms regulate sodium, potassium, calcium, phosphate, magnesium and
            other electrolytes.
          </p>

          <h3>Urea</h3>
          <p>
            Urea is produced by hepatic metabolism of nitrogen-containing compounds and is
            subsequently excreted by the kidneys.
          </p>

          <h3>Creatinine</h3>
          <p>
            Creatinine is generated from muscle creatine metabolism and is commonly used as a
            marker of renal filtration.
          </p>
        `,

        pathology: `
          <h2>Kidney Pathology</h2>

          <h3>Acute Kidney Injury</h3>
          <p>
            Acute kidney injury is a rapid decline in renal function resulting in impaired
            clearance of metabolic waste and disturbances of fluid and electrolyte balance.
          </p>

          <h3>Chronic Kidney Disease</h3>
          <p>
            Chronic kidney disease involves persistent structural or functional abnormalities
            of the kidneys and may progress to kidney failure.
          </p>

          <h3>Glomerular Disease</h3>
          <ul>
            <li>Glomerulonephritis</li>
            <li>Nephrotic syndrome</li>
            <li>Nephritic syndrome</li>
          </ul>

          <h3>Tubular and Interstitial Disease</h3>
          <ul>
            <li>Acute tubular injury</li>
            <li>Interstitial nephritis</li>
            <li>Pyelonephritis</li>
          </ul>

          <h3>Renal Stones</h3>
          <p>
            Nephrolithiasis occurs when crystals aggregate within the urinary tract. Common
            stone types include calcium oxalate, calcium phosphate, uric acid and struvite stones.
          </p>
        `,

        microbiology: `
          <h2>Renal and Urinary Microbiology</h2>

          <h3>Urinary Tract Infection</h3>
          <p>
            Urinary tract infections may involve the urethra, bladder, ureters or kidneys.
          </p>

          <ul>
            <li><strong>Escherichia coli:</strong> most common cause of uncomplicated UTI.</li>
            <li><strong>Klebsiella species</strong></li>
            <li><strong>Proteus species:</strong> associated with urease production and struvite stones.</li>
            <li><strong>Enterococcus species</strong></li>
            <li><strong>Pseudomonas aeruginosa:</strong> important in healthcare-associated infections.</li>
          </ul>

          <h3>Pyelonephritis</h3>
          <p>
            Pyelonephritis is infection involving the renal pelvis and renal parenchyma,
            usually resulting from ascending bacterial infection.
          </p>
        `,

        clinical: `
          <h2>Clinical Kidney Correlations</h2>

          <ul>
            <li><strong>Oliguria:</strong> reduced urine output.</li>
            <li><strong>Anuria:</strong> minimal or absent urine production.</li>
            <li><strong>Haematuria:</strong> blood in urine.</li>
            <li><strong>Proteinuria:</strong> excessive protein excretion.</li>
            <li><strong>Glycosuria:</strong> glucose in urine.</li>
            <li><strong>Polyuria:</strong> excessive urine production.</li>
            <li><strong>Renal failure:</strong> severe reduction in kidney function.</li>
          </ul>
        `,

        keyFacts: `
          <h2>High-Yield Kidney Facts</h2>
          <ul>
            <li>The nephron is the functional unit of the kidney.</li>
            <li>The glomerulus performs filtration.</li>
            <li>The proximal tubule performs extensive reabsorption.</li>
            <li>The loop of Henle contributes to the medullary concentration gradient.</li>
            <li>The distal nephron contributes to fine regulation of electrolytes and acid-base balance.</li>
            <li>ADH increases water permeability of collecting ducts.</li>
            <li>Renin participates in blood pressure regulation.</li>
            <li>Erythropoietin promotes erythropoiesis.</li>
            <li>The kidney activates vitamin D to calcitriol.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "renal-cortex",
          name: "Renal Cortex",
          modelFile: "renal_cortex.glb",

          notes: {
            anatomy: `
              <h2>Renal Cortex</h2>
              <p>
                The renal cortex is the outer region of the kidney. It contains renal corpuscles
                and portions of the renal tubules.
              </p>
            `,
            physiology: `
              <p>
                The cortex contains the glomeruli responsible for initiating plasma filtration
                and participates in tubular processing.
              </p>
            `
          }
        },

        {
          id: "renal-medulla",
          name: "Renal Medulla",
          modelFile: "renal_medulla.glb",

          notes: {
            anatomy: `
              <h2>Renal Medulla</h2>
              <p>
                The renal medulla consists primarily of renal pyramids containing loops of Henle
                and collecting ducts.
              </p>
            `,
            physiology: `
              <p>
                The medulla is essential for establishing the osmotic gradient that allows the
                kidneys to concentrate urine.
              </p>
            `
          }
        },

        {
          id: "renal-pelvis",
          name: "Renal Pelvis",
          modelFile: "renal_pelvis.glb",

          notes: {
            anatomy: `
              <h2>Renal Pelvis</h2>
              <p>
                The renal pelvis is the funnel-shaped proximal portion of the ureter that receives
                urine from the major calyces.
              </p>
            `,
            physiology: `
              <p>
                It collects urine produced by the kidney and directs it toward the ureter.
              </p>
            `,
            clinical: `
              <p>
                Obstruction at the renal pelvis or ureter can cause urinary stasis and
                hydronephrosis.
              </p>
            `
          }
        },

        {
          id: "nephron",
          name: "Nephron",
          modelFile: "nephron.glb",

          notes: {
            anatomy: `
              <h2>Nephron</h2>
              <p>
                The nephron is the microscopic functional unit of the kidney. Each nephron
                contains a renal corpuscle and renal tubule.
              </p>

              <h3>Components</h3>
              <ul>
                <li>Glomerulus</li>
                <li>Bowman's capsule</li>
                <li>Proximal convoluted tubule</li>
                <li>Loop of Henle</li>
                <li>Distal convoluted tubule</li>
              </ul>
            `,

            physiology: `
              <p>
                The nephron filters plasma and subsequently modifies the filtrate through
                selective reabsorption and secretion.
              </p>
            `,

            clinical: `
              <p>
                Damage to different nephron segments produces characteristic abnormalities
                in fluid, electrolyte and acid-base handling.
              </p>
            `
          },

          parts: [
            {
              id: "glomerulus",
              name: "Glomerulus",
              modelFile: "glomerulus.glb",

              notes: {
                anatomy: `
                  <h2>Glomerulus</h2>
                  <p>
                    The glomerulus is a tuft of fenestrated capillaries enclosed by Bowman's
                    capsule.
                  </p>
                `,
                physiology: `
                  <p>
                    It performs the initial filtration of plasma to produce glomerular filtrate.
                  </p>
                `,
                pathology: `
                  <p>
                    Glomerular injury may cause haematuria, proteinuria, reduced filtration
                    and nephrotic or nephritic syndromes.
                  </p>
                `
              }
            },

            {
              id: "proximal-tubule",
              name: "Proximal Convoluted Tubule",
              modelFile: "proximal_tubule.glb",

              notes: {
                anatomy: `
                  <h2>Proximal Convoluted Tubule</h2>
                  <p>
                    The proximal convoluted tubule is the first major tubular segment after
                    Bowman's capsule.
                  </p>
                `,
                physiology: `
                  <p>
                    It performs extensive reabsorption of filtered sodium, water, glucose,
                    amino acids, bicarbonate and other substances.
                  </p>
                `
              }
            },

            {
              id: "loop-of-henle",
              name: "Loop of Henle",
              modelFile: "loop_of_henle.glb",

              notes: {
                anatomy: `
                  <h2>Loop of Henle</h2>
                  <p>
                    The loop of Henle consists of descending and ascending limbs extending
                    into the renal medulla.
                  </p>
                `,
                physiology: `
                  <p>
                    Its differential permeability and active transport mechanisms contribute
                    to the corticomedullary osmotic gradient required for urine concentration.
                  </p>
                `
              }
            },

            {
              id: "distal-tubule",
              name: "Distal Convoluted Tubule",
              modelFile: "distal_tubule.glb",

              notes: {
                anatomy: `
                  <h2>Distal Convoluted Tubule</h2>
                  <p>
                    The distal convoluted tubule is located in the renal cortex and connects
                    the loop of Henle with the collecting system.
                  </p>
                `,
                physiology: `
                  <p>
                    It participates in regulation of sodium, potassium, calcium and acid-base
                    balance.
                  </p>
                `
              }
            },

            {
              id: "collecting-duct",
              name: "Collecting Duct",
              modelFile: "collecting_duct.glb",

              notes: {
                anatomy: `
                  <h2>Collecting Duct</h2>
                  <p>
                    Collecting ducts receive tubular fluid from multiple nephrons and extend
                    through the renal cortex and medulla.
                  </p>
                `,
                physiology: `
                  <p>
                    Antidiuretic hormone regulates water permeability of collecting ducts,
                    allowing adjustment of final urine concentration.
                  </p>
                `
              }
            }
          ]
        }
      ]
    },

    {
      id: "ureter",
      name: "Ureter",
      modelPath: "models/urinary/",
      modelFile: "ureter.glb",

      notes: {
        anatomy: `
          <h2>Ureter Anatomy</h2>
          <p>
            The ureters are paired muscular tubes that transport urine from the renal pelvis
            to the urinary bladder.
          </p>

          <h3>Wall</h3>
          <ul>
            <li>Mucosa lined by transitional epithelium</li>
            <li>Muscular layer</li>
            <li>Adventitia</li>
          </ul>
        `,

        physiology: `
          <p>
            Peristaltic contractions of ureteric smooth muscle propel urine toward the bladder.
          </p>
        `,

        pathology: `
          <p>
            Ureteric obstruction, particularly by renal calculi, can cause hydronephrosis,
            renal colic and impaired renal function.
          </p>
        `
      }
    },

    {
      id: "bladder",
      name: "Urinary Bladder",
      modelPath: "models/urinary/",
      modelFile: "bladder.glb",

      notes: {
        anatomy: `
          <h2>Urinary Bladder Anatomy</h2>
          <p>
            The urinary bladder is a muscular hollow organ located in the pelvis. It stores
            urine before voluntary and reflex-controlled micturition.
          </p>

          <h3>Major Regions</h3>
          <ul>
            <li>Apex</li>
            <li>Body</li>
            <li>Fundus</li>
            <li>Neck</li>
            <li>Trigone</li>
          </ul>

          <h3>Muscular Wall</h3>
          <p>
            The principal smooth muscle of the bladder is the detrusor muscle.
          </p>
        `,

        physiology: `
          <h2>Bladder Physiology</h2>

          <h3>Storage</h3>
          <p>
            During bladder filling, sympathetic activity promotes relaxation of the detrusor
            muscle and contraction of the internal urethral outlet.
          </p>

          <h3>Micturition</h3>
          <p>
            Bladder emptying involves parasympathetic activation of the detrusor and coordinated
            relaxation of urethral sphincter mechanisms.
          </p>
        `,

        pathology: `
          <h2>Bladder Pathology</h2>
          <ul>
            <li>Cystitis</li>
            <li>Urinary retention</li>
            <li>Urinary incontinence</li>
            <li>Bladder calculi</li>
            <li>Bladder carcinoma</li>
          </ul>
        `,

        microbiology: `
          <h2>Bladder Microbiology</h2>
          <p>
            Bacterial cystitis is commonly caused by ascending infection, particularly by
            uropathogenic Escherichia coli.
          </p>
        `,

        clinical: `
          <h2>Clinical Correlations</h2>
          <ul>
            <li><strong>Cystitis:</strong> inflammation of the bladder, commonly producing dysuria and frequency.</li>
            <li><strong>Urinary retention:</strong> inability to adequately empty the bladder.</li>
            <li><strong>Urinary incontinence:</strong> involuntary leakage of urine.</li>
            <li><strong>Neurogenic bladder:</strong> bladder dysfunction caused by neurological disease or injury.</li>
          </ul>
        `
      }
    },

    {
      id: "urethra",
      name: "Urethra",
      modelPath: "models/urinary/",
      modelFile: "urethra.glb",

      notes: {
        anatomy: `
          <h2>Urethra Anatomy</h2>
          <p>
            The urethra is the terminal portion of the urinary tract and carries urine from
            the bladder to the exterior.
          </p>

          <p>
            The male urethra is considerably longer and also functions as a conduit for semen.
            The female urethra is shorter and functions primarily in urinary elimination.
          </p>
        `,

        physiology: `
          <p>
            During micturition, coordinated relaxation of urethral sphincter mechanisms allows
            urine to pass from the bladder to the exterior.
          </p>
        `,

        pathology: `
          <ul>
            <li>Urethritis</li>
            <li>Urethral stricture</li>
            <li>Traumatic injury</li>
          </ul>
        `,

        microbiology: `
          <p>
            Urethritis may result from sexually transmitted pathogens such as Neisseria gonorrhoeae
            and Chlamydia trachomatis, among other organisms.
          </p>
        `
      }
    }
  ]
};