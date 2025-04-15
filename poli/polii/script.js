function cadastrar() {
   
        let NomeCompleto = document.getElementById('Nome').value;
        let Idade = document.getElementById('Idade').value;
        let RG = document.getElementById('RG').value;
        let CPF = document.getElementById('CPF').value;
        let Endereco = document.getElementById('Endereco').value;
        let Profissao = document.getElementById('Profissao').value;
    
       
        let resultado = `
            <h2>Cadastro Concluído com Sucesso!</h2>
            <p><strong>Nome completo:</strong> ${Nome}</p>
            <p><strong>Idade:</strong> ${Idade}</p>
            <p><strong>RG:</strong> ${RG}</p>
            <p><strong>CPF:</strong> ${CPF}</p>
            <p><strong>Endereço:</strong> ${Endereco}</p>
            <p><strong>Profissão:</strong> ${Profissao}</p>
        `;
    
       
        document.getElementById('resultado').innerHTML = resultado;
};
