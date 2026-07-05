   document.getElementById('childForm').addEventListener('submit', function(e) { 
    e.preventDefault(); 
 
    const name = document.getElementById('childName').value.trim(); 
    const school = document.getElementById('schoolName').value.trim(); 
    const totalFees = parseFloat(document.getElementById('totalFees').value); 
    const paid = parseFloat(document.getElementById('paidAmount').value); 
    const dueDate = document.getElementById('dueDate').value; 
    const editId = document.getElementById('editId').value;
 
    console.log('Submit clicked, editId =', editId);
 
    if (!name || !school || isNaN(totalFees) || isNaN(paid) || !dueDate) { 
      alert('Please fill all fields correctly.'); 
      return; 
    } 
 
    if (editId) { 
      console.log('Updating child with id', editId); 
      updateChild(editId, { name, school, totalFees, paid, dueDate }); 
      document.getElementById('editId').value = ''; 
      document.getElementById('submitBtn').textContent = 'Add Child'; 
    } else { 
      const newChild = { 
        id: Date.now().toString(), 
        name, 
        school, 
        totalFees, 
        paid, 
        dueDate 
      }; 
      addChild(newChild); 
    } 
 
    this.reset();     
    applyFilters();          
  });