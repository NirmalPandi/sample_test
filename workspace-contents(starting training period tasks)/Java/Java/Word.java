import java.util.Scanner;

class Word {
public static void main(String args[]) {
System.out.print("\nEnter String: ");
Scanner scanner = new Scanner(System.in);
String str = scanner.nextLine();
char chars[]= str.toCharArray();
for(int i=0;i<chars.length-1;i++){
if(chars[i]==chars[i+1]){
char key=chars[i];
chars[i]='#';
chars[i+1]='@';
for(int j=i+2;j<chars.length;j++){
if(key==chars[j]){
chars[j]='#';
}
}
}
}
System.out.print("\nModified String: ");
for(int i=0;i<chars.length;i++){
System.out.print(chars[i]);
}
}
}