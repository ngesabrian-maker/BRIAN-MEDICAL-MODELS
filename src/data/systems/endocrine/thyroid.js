export const thyroid =  {
      id: "thyroid-gland",
      name: "Thyroid Gland",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Thyroid Gland Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The thyroid gland is a butterfly-shaped endocrine organ located in the anterior
            neck, inferior to the larynx and anterior to the trachea.
          </p>

          <h3>Parts</h3>
          <ul>
            <li>Right lobe</li>
            <li>Left lobe</li>
            <li>Isthmus</li>
            <li>Pyramidal lobe may be present</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            The thyroid receives blood primarily from the superior and inferior thyroid arteries.
          </p>

          <h3>Hormone-Producing Cells</h3>
          <ul>
            <li><strong>Follicular cells:</strong> produce T4 and T3.</li>
            <li><strong>Parafollicular C cells:</strong> produce calcitonin.</li>
          </ul>
        `,

        physiology: `
          <h2>Thyroid Physiology</h2>

          <p>
            Thyroid hormones regulate basal metabolic rate, oxygen consumption, thermogenesis,
            growth and development.
          </p>

          <h3>Thyroid Hormones</h3>
          <ul>
            <li><strong>Thyroxine (T4):</strong> major hormone released by the thyroid.</li>
            <li><strong>Triiodothyronine (T3):</strong> more biologically active thyroid hormone.</li>
            <li><strong>Calcitonin:</strong> contributes to calcium regulation.</li>
          </ul>

          <h3>Hypothalamic-Pituitary-Thyroid Axis</h3>
          <p>
            TRH stimulates TSH release. TSH stimulates thyroid hormone synthesis. T3 and T4
            exert negative feedback on the hypothalamus and pituitary.
          </p>
        `,

        biochemistry: `
          <h2>Thyroid Biochemistry</h2>

          <p>
            Thyroid hormone synthesis requires iodine and thyroglobulin.
          </p>

          <ol>
            <li>Iodide is transported into thyroid follicular cells.</li>
            <li>Iodide is oxidized to an active form of iodine.</li>
            <li>Iodination of tyrosine residues occurs on thyroglobulin.</li>
            <li>MIT and DIT residues are formed.</li>
            <li>Coupling of DIT + DIT produces T4.</li>
            <li>Coupling of MIT + DIT produces T3.</li>
          </ol>

          <p>
            Most circulating T3 and T4 are protein-bound, primarily to thyroxine-binding globulin,
            transthyretin and albumin.
          </p>
        `,

        pathology: `
          <h2>Thyroid Pathology</h2>

          <h3>Hypothyroidism</h3>
          <p>
            Hypothyroidism results from inadequate thyroid hormone action. Common causes include
            autoimmune thyroid disease, iodine deficiency, thyroid destruction and inadequate
            hormone production.
          </p>

          <ul>
            <li>Fatigue</li>
            <li>Cold intolerance</li>
            <li>Weight gain</li>
            <li>Bradycardia</li>
            <li>Constipation</li>
            <li>Dry skin</li>
          </ul>

          <h3>Hyperthyroidism</h3>
          <p>
            Excess thyroid hormone increases metabolic activity.
          </p>

          <ul>
            <li>Weight loss</li>
            <li>Heat intolerance</li>
            <li>Tachycardia</li>
            <li>Tremor</li>
            <li>Anxiety</li>
            <li>Increased bowel activity</li>
          </ul>

          <h3>Goiter</h3>
          <p>
            Goiter refers to enlargement of the thyroid gland and may occur with hypothyroidism,
            hyperthyroidism or normal thyroid function.
          </p>

          <h3>Thyroid Cancer</h3>
          <ul>
            <li>Papillary carcinoma</li>
            <li>Follicular carcinoma</li>
            <li>Medullary carcinoma</li>
            <li>Anaplastic carcinoma</li>
          </ul>
        `,

        pharmacology: `
          <h2>Thyroid Pharmacology</h2>

          <ul>
            <li><strong>Levothyroxine:</strong> synthetic T4 used to treat hypothyroidism.</li>
            <li><strong>Methimazole:</strong> inhibits thyroid hormone synthesis.</li>
            <li><strong>Propylthiouracil:</strong> inhibits thyroid hormone synthesis and peripheral T4-to-T3 conversion.</li>
            <li><strong>Radioactive iodine:</strong> can destroy thyroid tissue and is used in selected thyroid disorders.</li>
          </ul>
        `,

        histology: `
          <h2>Thyroid Histology</h2>

          <p>
            The thyroid consists of spherical follicles filled with colloid. Follicular cells
            surround the colloid and synthesize thyroid hormones. Parafollicular cells occur
            between follicles and produce calcitonin.
          </p>
        `
      }
    };
