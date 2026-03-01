import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
    var homem = new Pessoa("Lucas");
    var mulher = new Pessoa("Maria");

        System.out.println("Homem nome: "+homem.getNome()+"\n idade: "+homem.getIdade() );
        System.out.println("Mulher nome: "+mulher.getNome()+"\n idade: "+mulher.getIdade() );

    }
}