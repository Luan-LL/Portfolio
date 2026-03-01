import java.time.OffsetDateTime;

public class Pessoa {

    private final String nome;
    private int idade;

    private int ultimoAnoInc = OffsetDateTime.now().getYear();

    public Pessoa(String nome) {
        this.nome = nome;
        this.idade = 1;
    }
    public String getNome(){
        return nome;
    }
    public int getIdade(){
        return idade;
    }
    public void setIdade(int idade){
        this.idade = idade;
    }
    public void incAno(){
        if (this.ultimoAnoInc >= OffsetDateTime.now().getYear())return;

        this.idade +=1;
        this.ultimoAnoInc = OffsetDateTime.now().getYear();
    }
}
