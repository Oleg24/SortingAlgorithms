import java.util.*;
import java.util.Scanner;

public class bubbleSort{
  public static void main(String[] args){

    Scanner input = new Scanner(System.in);

    // int []numbers = {65, 0, 24, 2, 65, 34, 16};

    System.out.println("What is the length of the array that you would like to sort?");
    int num = input.nextInt();

    int numbers[] = new int[num];

    System.out.println("Enter the " + num + " numbers now.");

    for (int i = 0 ; i < numbers.length; i++ ) {
      numbers[i] = input.nextInt();
    }

    sort(numbers);
    printArray(numbers);

  }

  public static int[] sort(int[] Arr){
    for(int i = 0; i < Arr.length; i++){
      for(int j=i; j < Arr.length; j++){
        if(Arr[j] < Arr[i]){
          int temp = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = temp;
        }
      }
    }
    return Arr;
  }

  public static void printArray(int[] Arr){
      String nums = Arrays.toString(Arr);

      System.out.println("The sorted array is " + nums);
    }


}
